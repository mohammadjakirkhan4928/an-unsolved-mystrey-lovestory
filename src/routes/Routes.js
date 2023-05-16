import React from 'react';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import { createBrowserRouter } from 'react-router-dom';
import NovelCover from '../pages/novelcover/Novelcover';
import Novelpdfpage from '../pages/novelpdfpage/Novelpdfpage';
import Review from '../pages/review/Review';
import Banner from '../pages/banner/Banner';
import Songs from '../pages/songs/Songs';
import Modalcontent from '../pages/modal/Modalconent';
import Testimonials from '../pages/review/Testimonials';



export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/novelcover',
                element: <NovelCover></NovelCover>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/songs',
                element: <Songs></Songs>
            },
            {
                path: '/modal',
                element: <Modalcontent></Modalcontent>
            },
            {
                path: '/testimonial',
                element: <Testimonials></Testimonials>
            },
            {
                path: '/novelpdfpage',
                element: <Novelpdfpage></Novelpdfpage>
            }

        ]
    },

])