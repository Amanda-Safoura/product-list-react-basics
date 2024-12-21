import { ProductRow } from "./ProductRow";

export function ProductListForCategory({ products, onlyWithStock, category, searchFilter }) {

  return products.filter((product) => product.category === category)
    .map(product =>
      <ProductRow
        key={product.name.toLowerCase()}
        price={product.price}
        color={!product.stocked ? "danger" : "black"}

        // si le checkbox de filtre est coché
        // et que le produit a du stock
        // ou bien le filtre n'est pas coché dans ce cas

        // dans ces cas, on renvoie true
        withStockDisplay={((onlyWithStock && product.stocked) || !onlyWithStock)}

        // si le searchInput est vide
        // ou si le produit correspond au critère de recherche
        // on renvoie true
        inSearchResults={(searchFilter === "") || (searchFilter !== "" && (product.name.toLowerCase().includes(searchFilter.toLowerCase())))}

      >
        {product.name}
      </ProductRow>
    )

}
