import '../Styles/ProductCard.css'

const ProductCard = ({ title, description, image, onAddToCart }) => {
    return (
        <div className="product-card">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <img src={image} alt={image} className="product-image"/>
            <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
        </div>
    )
}

export default ProductCard