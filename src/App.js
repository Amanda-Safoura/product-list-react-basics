import { useState } from "react";
import { SearchInput } from "./components/forms/SearchInput";
import { ProductTable } from "./components/table/ProductTable";
import { CheckBoxFilter } from "./components/forms/CheckBoxFilter";

export const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
]

function App() {
  const [onlyWithStockSelected, setOnlyWithStockSelected] = useState(false)

  const [keyWord, setKeyWord] = useState("")

  return <>
    <div className="container my-4">
      <SearchInput onTypingKeyWord={setKeyWord} keyWord={keyWord} placeholder={"Rechercher..."} />
      <CheckBoxFilter
        checked={onlyWithStockSelected}
        onCheck={setOnlyWithStockSelected}
        label={"N'afficher que les produits en stock"}
        id={"with_filter_stock"}
      />
      <ProductTable onlyWithStock={onlyWithStockSelected} searchFilter={keyWord} products={PRODUCTS} />
    </div>
  </>
}

export default App
