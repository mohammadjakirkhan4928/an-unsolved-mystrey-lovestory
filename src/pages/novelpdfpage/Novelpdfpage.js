import React, { useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link, useParams, useHistory } from "react-router-dom";
import "./novel.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Novelpdfpage = () => {
  const { pageNumber } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pagesToLoad, setPagesToLoad] = useState([]);
  const [pagesToRender, setPagesToRender] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentPageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollPosition(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const pages = [];
    let i = 0;
    while (i < 3 && pagesToLoad.length > 0) {
      const page = pagesToLoad.shift();
      pages.push(page);
      setLoadedPages((prevPages) => [...prevPages, page]);
      i++;
    }
    setPagesToRender((prevPages) => [...prevPages, ...pages]);
  }, [pagesToLoad]);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPagesToLoad([...Array(numPages).keys()]);
    setPageNumber(1);
  }, []); /// new add

  useEffect(() => {
    const newPagesToLoad = [];
    for (
      let i = Math.max(0, pageNumber - 2);
      i < Math.min(numPages, pageNumber + 3);
      i++
    ) {
      if (!loadedPages.includes(i) && !pagesToLoad.includes(i)) {
        newPagesToLoad.push(i);
      }
    }
    setPagesToLoad((prevPages) => [...prevPages, ...newPagesToLoad]);
  }, [pageNumber, numPages, loadedPages, pagesToLoad]);

  const handleGoToFirstPage = () => {
    // setIsLoading(true);
    // window.location.href = `/novelpdfpage?pageNumber=1`;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/novelpdfpage?pageNumber=1";
      setIsLoading(false);
    }, 1000); // 3 minutes in milliseconds
  };

  // Render PDF document and navigation buttons
  return (
    <div className="bg-info rounded-3xl m-4 flex flex-col justify-center items-center min-h-screen">
    {/* // <div style={{ backgroundColor: "white" }} className="rounded-3xl m-4 flex flex-col justify-center items-center min-h-screen"> */}
      <div className="rounded-doc">
        <Document
          file="/Story-compressed.pdf"
          options={{ disableTextLayer: true, disableWorker: true }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {pagesToRender.map((page) => (
            <Page
              key={page}
              pageNumber={page + 1}
              size="A4"
              width={600}
              renderMode="canvas"
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
      <div className="py-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-4"
          onClick={handleGoToFirstPage}
        >
          Go back to first page
        </button>
        {isLoading && (
          <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse  bg-white"></div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Novelpdfpage;
