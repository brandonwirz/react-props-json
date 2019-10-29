import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

function App() {

const propComp = productsData.map(item => <Product key={item.id} product={item}/> )

  return (
    <div>
        {propComp}
    </div>
    )
}

export default App;
