import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Errorelement from './Components/Errorelement/Errorelement.jsx'
import Home from './Components/Home/Home.jsx'
import ListedPage from './Components/ListedPage/ListedPage.jsx'
import ReadPage from './Components/ReadPage/ReadPage.jsx'
import { RouterProvider } from 'react-router-dom'
import Bookjournal from './Components/Bookjournal/Bookjournal.jsx'
import Textarea from './Components/Textarea/Textarea.jsx'
// create routes

const router=createBrowserRouter([
  {
  path:'/',
  element:<Root></Root>,
  errorElement:<Errorelement></Errorelement>,
   children:[
        {
        path:'/',
        element:<Home></Home>
        },
        {
          path:'/listedpage',
          element:<ListedPage></ListedPage>
        },
        {
          path:'/readpage',
          element:<ReadPage></ReadPage>
        },
        {
          path:'/bookjournal',
          element:<Bookjournal></Bookjournal>
        },
        {
           path:'/textarea',
           element:<Textarea></Textarea>
        }

   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
