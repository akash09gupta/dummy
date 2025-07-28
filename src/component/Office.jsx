import NavBar from "./NavBar";
import Products from "./Products";

function Office() {
  return (
    <>
      <NavBar />
      <div className="w-100 h-100 mt-3">
        <Products/>
        <Products/>
        <Products/>
        <Products/>
        <Products/>
      </div>
    </>
  );
}

export default Office;
