import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";
function Router2() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
}
export default Router2;
