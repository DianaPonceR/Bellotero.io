import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentConfigurator from "../containers/ContentConfigurator";
import Testimonial from "../pages/Testimonial";
import Configurator from "../pages/Configurator";
import Menu from "../components/Menu";


const AppRouter = () => {
    return (
        <>

            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<Configurator />} />
                    <Route exact path="/testimonials" element={<Testimonial />} />

                    <Route path="*" element={<Configurator />} />
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default AppRouter;