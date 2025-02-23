import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty,deleteQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((precio, item) => precio + item.qty * item.precio, 0).toFixed(2)
  // prodcut qty total
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              
              const productQty = (item.precio * item.qty).toFixed(2)

              return (
                <div className='cart-list product d_flex' key={item.iD_PRODUCTO}>
                  <div className='img'>
                    <img src={`./images/product/${item.codigo}.jpg`} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.nombre}</h3>
                    <h4>
                      ${item.precio} * {item.qty}
                      <span>${productQty}</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => deleteQty(item)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
