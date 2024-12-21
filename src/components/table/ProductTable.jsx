import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductListForCategory } from "./ProductListForCategory";

export function ProductTable({ onlyWithStock, searchFilter, products }) {

  let categories = []
  products.forEach(element => {
    if (!categories.includes(element.category))
      categories.push(element.category)
  })


  return <table className="table">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => {
          return <>
            <ProductCategoryRow key={category.toLowerCase()}>{category}</ProductCategoryRow>
            <ProductListForCategory category={category} onlyWithStock={onlyWithStock} searchFilter={searchFilter} products={products} />
          </>
        }
        )}
      </tbody>
    </table>
}
