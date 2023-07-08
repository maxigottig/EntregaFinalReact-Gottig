import Item from "../Item/Item"
import "./itemListContainer.css"



const ItemList = ({product}) => { 

    return (
        <>
            <section className="itemList">
                {product.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            id= {product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                        ></Item>
                    )
                })}
            </section>

        </>
    );
};

export default ItemList
