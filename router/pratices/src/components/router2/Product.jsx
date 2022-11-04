import { useLocation } from "react-router-dom";

function Product() {
    const {state} = useLocation()
//   let { categoryId } = useParams();
  return (
    <>
      <h2>Id selected {state.categoryId}</h2>
    </>
  );
}
export default Product;
