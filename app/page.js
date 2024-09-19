import Image from "next/image";
import Newsletter from "./components/Newsletter";
import ProductList from "./components/ProductList";
import LatestCard from "./components/LatestCard";


export default function Home() {
  return (
      <div>
        <LatestCard />
        <ProductList />
        <Newsletter />
      </div>
  );
}
