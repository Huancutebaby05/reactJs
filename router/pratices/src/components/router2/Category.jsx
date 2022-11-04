import { useNavigate } from "react-router-dom";

function Category() {
  let navigate = useNavigate();
  const sendDataToProduct = (event) => {
    navigate("/product", {state:{categoryId: event.target.value}});
  };
  return (
    <>
      <h1>Select a Category</h1>
      <select defaultValue="default" onChange={(e) => sendDataToProduct(e)}>
        <option value="default" disabled hidden>
          Chose your car
        </option>
        <option value="Honda">Honda</option>
        <option value="Suzuki">Suzuki</option>
        <option value="Yamaha">Yamaha</option>
      </select>
    </>
  );
}
export default Category;
