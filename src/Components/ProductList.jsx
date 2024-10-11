import ProductCard from "./ProductCard"
import '../Styles/ProductList.css'

const ProductList = ({ products }) => {
    const handleAddToCart = (productName) => {
        alert(`${productName} added to cart!`)
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    onAddToCart={() => handleAddToCart(product.title)}
                />
            ))}
        </div>
    )
}

export default ProductList