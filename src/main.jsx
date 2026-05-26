import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {router} from './routes/appRouter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider   router={createBrowserRouter(router)}/>
   
  </StrictMode>,
)
