import { useContext } from "react"
import { Context } from "../contexts/Context"
import ProductCard from "../components/ProductCard"

const ProductContainer = () => {
    const { products } = useContext(Context)
    const mappedProducts = () => {
        return products.map((p) => <ProductCard productObj={p} key={p.id} />)
    }
    return (
        <div>
            PRODUCTS
            <br />
            {mappedProducts()}
        </div>
    )
}

export default ProductContainer
