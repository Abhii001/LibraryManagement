import { useState } from 'react';
import SearchBox from './component/Searchbox';
import Booklist from './component/Booklist';
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Books } from './utilis/MockData';

function App() {
  const [filteredBooks, setFilteredBooks] = useState(Books);

  return (
    <>
      <Header />
      <SearchBox setFilteredBooks={setFilteredBooks} />
      <Booklist bookData={filteredBooks} />
      <Footer />
    </>
  );
}

export default App;