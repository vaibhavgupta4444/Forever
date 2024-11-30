import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {useSearchParams} from 'react-router-dom'
import { useEffect } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'

const Verify = () => {
    const {navigate,token,setCartItems,backendUrl}=useContext(ShopContext);

    const[searchParams,setSearchParams]=useSearchParams()

    const success=searchParams.get('success');
    const orderId=searchParams.get('orderId');

    const verifyPayment=async()=>{
        try {
            if (!token) {
                return null;
            }

            const response=await axios.post(backendUrl+'/api/order/verifystripe',{success,orderId},{headers:{token}});
            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
                toast.success("Order Placed");
            }else{
                navigate('/cart');
                toast.error("Payment Failed");
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[token])

  return (



    <div>
      
    </div>
  )
}

export default Verify
