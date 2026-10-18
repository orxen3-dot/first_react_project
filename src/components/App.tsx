
import Product from './Product';
import { AiFillAlipaySquare } from "react-icons/ai";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
<AiFillAlipaySquare size={800}/>
      <Product name="Tacos" price={200} />
      <Product name="Lemons" price={50} />
      <Product name="Burritos" price={650} />
    </>
  );
}
