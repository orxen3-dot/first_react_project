
interface ProductProps {
    name : string;
    price : number;
}
export default function Product({ name, price }: ProductProps) {
  return (
    <div>
          <h2>{name}</h2>
      <p>Price: {price} credits</p>
    </div>
  );
}
