import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Error from './component/Error.jsx';
import Booklist from './component/Booklist.jsx';
import BookDetails from './component/BookDetails.jsx';
import AddBooks from './component/AddBooks.jsx';
import Browsebook from './component/Browsebook.jsx';
import { Books } from './utilis/MockData.js';

function AppIndex() {
  const [filteredBooks, setFilteredBooks] = useState(Books);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Booklist bookData={filteredBooks} setFilteredBooks={setFilteredBooks} />
        },
        {
          path: "Browsebook",
          element: <Browsebook bookData={filteredBooks} setFilteredBooks={setFilteredBooks} />
        },
        {
          path: "Addbook",
          element: <AddBooks />
        },
        {
          path: "book/:id",
          element: <BookDetails />
        }
      ],
      errorElement: <Error />
    },
    {
      path: "/home",
      element: <App />,
      children: [
        {
          index: true,
          element: <Booklist bookData={filteredBooks} setFilteredBooks={setFilteredBooks} />
        },
        {
          path: "Browsebook",
          element: <Browsebook bookData={filteredBooks} setFilteredBooks={setFilteredBooks} />
        },
        {
          path: "Addbook",
          element: <AddBooks />
        },
        {
          path: "book/:id",
          element: <BookDetails />
        }
      ],
      errorElement: <Error />
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default AppIndex;
