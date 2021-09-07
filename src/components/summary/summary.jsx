import React, { useState, useEffect } from 'react';
import './summary.scss';
import MarkII from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';

function Summary() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [id, setId] = useState('');
    const [refresh, setRefresh] = useState('');
    const [cartQuantity, setCartQuantity] = useState(0);
    const [quantitySum, setQuantitySum] = useState('');
    const [shipping, setShipping] = useState('');
    const [totalSum, setTotalSum] = useState('');
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);
    const [grandTotal, setGrandTotal] = useState(JSON.parse(localStorage.getItem('grandTotal')) || [0]);

    setTimeout(() => {
        total();
        setGrandTotal(quantitySum + (shipping * 1.25));
    }, 200);

    const quantityPlus = (event) => {
        const myCart = JSON.parse(localStorage.cart);

        for (var i = 0; i < myCart.length; i++) {
            if (id === myCart[i].id) {
                myCart[i].quantity.quantity++;
                localStorage.setItem('cart', JSON.stringify(myCart));
                setRefresh(true);
                break;
            } else {
                console.log("No Id match found");
            }
        }
    }

    const total = () => {
        const myCart = JSON.parse(localStorage.cart);
        let quantitySumCalc = [];
        let shippingSumCalc = [];

        for (var i = 0; i < myCart.length; i++) {
            quantitySumCalc.push(myCart[i].quantity.quantity * myCart[i].cost);
        }
        setQuantitySum(Number((quantitySumCalc.reduce((a, v) => a = a + v , 0)).toFixed(2)));

        for (var i = 0; i < myCart.length; i++) {
            shippingSumCalc.push(myCart[i].quantity.quantity)
        }
        setShipping(shippingSumCalc.reduce((a, v) => a = a + v , 0));
        console.log(quantitySum);
        console.log(shipping*1.25);

    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(order));
    }, [order]);

    useEffect(() => {
        localStorage.setItem("grandTotal", JSON.stringify(grandTotal));
    }, [grandTotal]);

    useEffect(() => {
        if (refresh === true) {
        setRefresh(false);
        window.location.reload();
        } else {
            console.log('not refreshing');
        }
    }, [refresh]);



    return (
<> 
    <div className="summary-inner-container">
    <h3 className="summary-header">SUMMARY</h3>
    {cart.map((product, index) => (
    <div className="product-container">
        <img src={product?.image} alt="product image" className="product-image" />
        <div className="title-container">
        <h4 className="product-title">{product.name}</h4>
        <h5 className="product-price">${product.cost}</h5>
        </div>
        <div className="mobile-container">
        <img src={product?.image} alt="product image" className="product-image-mobile" />
        <div className="title-container-mobile">
        <h4 className="product-title-mobile">{product.name}</h4>
        <h5 className="product-price-mobile">${product.cost}</h5>
        </div>
        </div>
        <div className="quantity-container">
            <p className="quantity">x{product.quantity.quantity}</p>
        </div>
    </div>
    ))}
    <div className="total-container">
    <p className="total">TOTAL</p>
    <p className="total-variable">${quantitySum}</p>
    </div>
    <div className="total-container">
    <p className="total">SHIPPING</p>
    <p className="total-variable">${shipping * 1.25}</p>
    </div>
    <br></br>
    <div className="total-container">
    <p className="total">GRAND TOTAL</p>
    <p className="final-total-variable">${quantitySum + (shipping * 1.25)}</p>
    </div>
</div>
</>
    )
}

export default Summary;
