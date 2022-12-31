import React,{useState,useEffect} from "react";
import Button from '@mui/material/Button';
//import { useContext } from "react";
//import { ContextElement } from "../../Context/Context";
import "./styleBuy.css"
import { useSelector } from "react-redux";

const Buy=()=>{
    const[info,setInfo]=useState({name:"",surname:"",address:"",creditcard:"",security:""})
  //  const{priceOk}=useContext(ContextElement)
    const{totalPriceState}=useSelector((state:any)=>state.cart)

    const inputHandler=(e:any)=>{
        e.preventDefault()
        setInfo({...info, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log(info, "info")

    }

    return(
        <>
            <div className="title-menu">
                    <div className="title-menu-content">
                        <img src="starbucks/logoblackok.png" alt="loading" id="menu-logo1"/>
                        <p>Transaction</p>
                    </div>
                </div>
            <div className="form">
                <p>Please insert your data so we can deliver to you the products you has just chosen</p>
                <p>Total Price:${totalPriceState} </p>
                <form onSubmit={handleSubmit}>
                
                    <input type="text" name="name" placeholder="Name" onChange={inputHandler} />
                    <input type="text" name="surname" placeholder="Surname" onChange={inputHandler}/>
                    <input type="text" name="address" placeholder="Address" onChange={inputHandler}/>
                    <input type="text" name="creditcard" placeholder="Credit card number" onChange={inputHandler}/>
                    <input type="text" name="security" placeholder="Security code" onChange={inputHandler}/>
                    <Button variant="contained" id="button-buy" type="submit">Send</Button>
                    
                </form>
            </div>
        </>
    )

}

export default Buy