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

const Main1 = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/contactUs" element={<Contactus/>}/>
        <Route path="collection" element={<Collection/>}/>
        <Route path="*"element={<PagesNotFound/>}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Main1;
