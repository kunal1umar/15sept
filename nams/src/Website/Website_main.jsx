
import {PreHeader, Header, CardPane, Carousel, About, Contact, Footer} from "./Website_modules";

import { Website_signin } from "./Website_signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Website_main()
{
    return(
        <div>
           
            <div>
    <PreHeader/>
    <Header/>
    <Carousel/>
    <CardPane/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
            
        </div>
    );
}

export {Website_main};