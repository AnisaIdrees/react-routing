import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Blog from './Blog';
import Shop from './Shop'
import Contactus from "./Contactus";
import Collection from './Collection';
import PagesNotFound from "./PagesNotFound";
import Layout from "./Layout";
import DetailPage from "./DetailPage";

const Main1 = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogggf" element={<Blog />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/contactUsg" element={<Contactus/>}/>
        <Route path="collegjf" element={<Collection/>}/>
        <Route path="*"element={<PagesNotFound/>}/>
        <Route path='/collection/:id' element={<DetailPage/>} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} fallbackElement={<h1> loading ....</h1>}/>
    </>
  );
};

export default Main1;
