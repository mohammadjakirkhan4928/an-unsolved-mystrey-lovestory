import React, { useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link, useParams } from "react-router-dom";
import "../novelpdfpage/novel.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Modalcontent = () => {
  const { pageNumber } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pagesToLoad, setPagesToLoad] = useState([]);
  const [pagesToRender, setPagesToRender] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setPagesToLoad([...Array(numPages).keys()]);
  }, []);

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

  return (
    <div className="bg-info rounded-3xl m-4 flex flex-col justify-center items-center min-h-screen">
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
      <div className="flex justify-center items-center w-full py-2">
        {pageNumber > 1 && (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
            to={`/pdf/${parseInt(pageNumber) - 1}`}
          >
            Previous Page
          </Link>
        )}
        {pageNumber < numPages && (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            to={`/pdf/${parseInt(pageNumber) + 1}`}
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Modalcontent;
