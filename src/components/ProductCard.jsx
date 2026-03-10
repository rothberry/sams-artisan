const ProductCard = ({ productObj: { id, name, price, img } }) => {
    const handleClick = () => {
        console.log({ id, name })
    }
    return (
        <div id={id} onClick={handleClick}>
            id: {id}
            Name: {name}
            price: ${price}
            <img src={img} alt={name} />
        </div>
    )
}

export default ProductCard
