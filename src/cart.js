import React from 'react';
import {useState} from "react"

function Cart() {
    const [ num,setNum ] = useState(0);

            function inc()
            {
                  setNum(num+1);
            }
            function dec()
            {    if(num>0){
                  setNum(num-1)}}
  return (
        <div className='ab'> 
              <div className='buttons'>
              <button name='update' onClick={inc}>ADD TO THE CART</button>
              <button name='update' onClick={dec}>REMOVE FROM CART</button>
              </div>
        </div>
  );
}

export default Cart;
