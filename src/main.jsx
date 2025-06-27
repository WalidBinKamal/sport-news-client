import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import Hero from './component/Hero.jsx';
import AddNews from './component/AddNews.jsx';
import {  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import NewsList from './component/NewsList.jsx';
import LogIn from './component/LogIn.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Hero></Hero>
      },
      {
        path: '/addNews',
        element: <AddNews></AddNews>,
      },
      {
        path: '/newsList',
        element: <NewsList></NewsList>,
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      
    ]
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
