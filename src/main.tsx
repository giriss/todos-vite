import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import loadable from '@loadable/component'

const Layout = loadable(() => import('./components/Layout'))
const Home = loadable(() => import('./components/Home'))
const Todos = loadable(() => import('./components/Todos'))
const Table = loadable(() => import('./components/Table'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'todos',
        element: <Todos />
      },
      {
        path: 'table',
        element: <Table />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
