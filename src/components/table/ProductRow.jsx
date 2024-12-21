export  function ProductRow({ children, price, color, withStockDisplay, inSearchResults }) {

    return <tr className={inSearchResults && withStockDisplay ? "" : "d-none"}>
        <td className={`text-${color}`}>{children}</td>
        <td>{price}</td>
    </tr>
}
