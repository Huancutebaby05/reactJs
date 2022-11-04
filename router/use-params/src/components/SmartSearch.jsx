import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function SmartSearch() {
  let products = ["iphone 13 pro", "iphone 12", "Galaxy s22"];
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          // console.log(filter);
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {products
        .filter((product) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = product.toLowerCase();
          // console.log(name);
          return name.startsWith(filter.toLowerCase());
        })
        .map((product, index) => (
          <li key={index}>{product}</li>
        ))}
    </div>
  );
}
export default SmartSearch;