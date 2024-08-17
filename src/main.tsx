import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import MainPage from './MainPage.tsx'
import Nebulae from './Astrophotography/Nebulae.tsx'
import Galaxies from './Astrophotography/Galaxies.tsx'
import OtherObjects from './Astrophotography/Other Objects.tsx'

const router = createBrowserRouter([
  {
    path: "/astro-website/",
    element: <MainPage />
  },
  {
    path: "/astro-website/astrophotography/nebulae",
    element: <Nebulae />
  },
  {
    path: "/astro-website/astrophotography/galaxies",
    element: <Galaxies />
  },
  {
    path: "/astro-website/astrophotography/other_objects",
    element: <OtherObjects />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
