import { Header, Footer, Cart, ProductList } from "./components";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContent = viewCart ? <Cart /> : <ProductList />;
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );
  return content;
}

export default App;
