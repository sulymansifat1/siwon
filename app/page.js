import Image from "next/image";
import NavBer from "./components/NavBer";
import ProductsPage from "./components/ProductPage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBer/>
      <ProductsPage/>
      <Footer/>
    </div>
  );
}
