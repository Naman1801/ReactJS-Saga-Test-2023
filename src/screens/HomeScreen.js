import React,{useEffect} from 'react'
import { addToCart, emptyCart, removeToCart } from '../redux/actions/actions';

import { productList } from '../redux/actions/actions'
import { useDispatch,useSelector } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.cartData);
    console.warn("data in main component", data);
    useEffect(()=>{
      dispatch(productList())
    },[])
  return (
    <div>
        <h4 >This is Ecommerce Website</h4>
        <button>ADD</button>
        <button>REMOVE</button>
        <button>REMOVE ALL</button>
        <button>UPDATE</button>
        <div className='product-container' >
        {
          data.map((item)=><div className='row' style={{float:"left"}}>
            <img src={item.photo} alt="" style={{width:150,height:150}} />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

              </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default HomeScreen
