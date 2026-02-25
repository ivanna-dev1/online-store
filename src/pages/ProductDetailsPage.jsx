import { useParams } from "react-router-dom";
import products from "../products";

export default function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details {id}</h1>
    </div>
  );
}
