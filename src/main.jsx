import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Error from './component/Error.jsx';
import Booklist from './component/Booklist.jsx';
import BookDetails from './component/BookDetails.jsx';
import AddBooks from './component/AddBooks.jsx';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Booklist />,
      },
      {
        path: "/home",
        element: <Booklist />,
      },
      {
        path: "/Browsebook",
        element: <Booklist />
      },
      {
        path: "/Addbook",
        element: <AddBooks />
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      }
    ],
    errorElement: <Error />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
