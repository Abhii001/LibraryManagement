import Book from './Book';
import { v4 as uuidv4 } from 'uuid';

function Browsebook({ bookData }) {
  if (!Array.isArray(bookData)) {
    return <p>No books available.</p>;
  }

  return (
    <>
    <h1 className='font-bold text-center text-4xl'>All Books</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-8">
        {bookData.length > 0 ? (
          bookData.map((book) => (
            <Book key={uuidv4()} bookDetails={book} />
          ))
        ) : (
          <p className="text-center mt-4">No books to display</p>
        )}
      </div>
    </>
  );
}

export default Browsebook;
