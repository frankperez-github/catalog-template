import Image from 'next/image'

function ProductCard({product}){
    return(
        <div className="ProductCard">
            
            <div className="ProductImage">
                <Image src={product.image} alt="Image" width={100} height={100}/>
            </div>
            <h2 className='ProductName'>{product.mark}</h2>
            <div className="InfoProduct">
                <p>Marca: {product.mark}</p>
                <p>Cantidad: {product.qty}</p>
                <p>Precio: {product.price}</p>
            </div>
            <button className='BuyButton' >Comprar</button>

        </div>
    )
}
export default ProductCard;