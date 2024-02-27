import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About' ;
import Contact from './Components/Contact' ;
import User from './Components/User' ;
import Github from './Components/Github';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout />,
//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path:"home",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// way 2 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userId' element={<User />} />
        <Route path='github' element={<Github />} />
    </Route> 
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // <BrowserRouter>
  //      <App />
  // </BrowserRouter>
);


reportWebVitals();
