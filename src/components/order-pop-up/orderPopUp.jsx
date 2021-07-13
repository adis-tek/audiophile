import React, { useState, useEffect} from 'react';
import './order-pop-up.scss';

function OrderPopUp() {
    const [orderPopUpStored, setOrderPopUp] = useState(JSON.parse(localStorage.getItem("order")));
    const [orderCheck, setOrderCheck] = useState(JSON.parse(localStorage.getItem("order")) || []);

    // if (orderPopUpStored !== false) {
    //     setTimeout(() => {
    //         setOrderCheck(true);
    //         console.log('Order Window Opens');
    //     }, 500);
    // } else {
    //     console.log('');
    // }


    function toggleOrder() {
        localStorage.setItem("order", JSON.stringify(false));
        window.location.reload();
    }

    return (
<>
{orderCheck === true && (
<>

    <div className="order-backdrop" onClick={toggleOrder}>
</div>
    <div className="order-pop-up">
    <h1>Testing Testing</h1>
    </div>
</>
)}
</>
)
}

export default OrderPopUp;
