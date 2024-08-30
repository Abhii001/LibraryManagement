import Header from "./component/Header";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import BookDetails from "./component/BookDetails";

function App() {

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <BookDetails/>

    </>
  );
}

export default App;
