import React, { useEffect,useState } from "react";
import { Grid } from "@mui/material";
import "./styleCheckout.css"
//import { useContext } from "react";
//import { ContextElement } from "../../Context/Context";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { addProduct,emptyListRed,deleteProduct,totalPrice } from "../../store/cartSlice";



const Checkout=()=>{
    const[checkCart, setCheckCart]=useState(false)
    //const{cartList, AddCart,priceOk,EmptyCart,DeleteProduct}=useContext(ContextElement)
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const {cartListRed,totalPriceState}=useSelector((state:any)=>state.cart )
   //const {cartListRed}:any=useSelector<any>(state=>state.cart)


    const addHandler=(quantity:number, product:any)=>{
        //console.log("okkkk")
       // AddCart(product,quantity)
      dispatch(addProduct({
        product,
        quantity
       }))
       dispatch(totalPrice())//asi se actualiza el totalPrice tb
      

    }

    const deleteHandler=(item:any)=>{//handler asi llama tb al totalPrice y actual
        dispatch(deleteProduct({item}))
        dispatch(totalPrice())

    }

    useEffect(()=>{
        if(cartListRed.length==0){
            setCheckCart(false)

        }else{
            setCheckCart(true)
        }
    },[])


    return(
       <>
            {checkCart ==false ? (
                <>
                    <div className="title-checkout">
                        <div className="title-checkout-content">
                            <img src="starbucks/logoblackok.png" alt="loading"/>
                            <p>Cart</p>
                        </div>
                    </div>
                    <div>
                        <img src="starbucks/cartEmpty.gif" alt="loading" id="cart"/>
                    </div>
                </>
            ):(
                <Grid container>
                    <Grid item md={12} xs={12}>
                    <div className="title-checkout">
                        <div className="title-checkout-content">
                            <img src="starbucks/logoblackok.png" alt="loading"/>
                            <p>Cart </p>
                        </div>
                    </div>

                </Grid> 
                <div className="table">
                    <div className="table-title">
                        <div id="title-product">img</div>
                        <div id="title-title">Title</div>
                        <div id="title-quantity">Units</div>
                        <div id="title-price">Price</div>
                        <div id="title-delete">Remove</div>
                    </div>
                
                

                    {cartListRed.map((item:any)=>{
                        return(<>
                                <div className="table-item">
                                    <div id="item-product"><img src={item.img} alt="loading"/></div>
                                    <div id="item-title"><p>{item.title}</p> </div>
                                    <div id="item-quantity"><ItemCount addHandler={addHandler} initial={item.quantity} product={item} /> </div>
                                    <div id="item-price"><p>${item.quantity * item.price}</p> </div>
                                    <div id="item-delete"><Button variant="contained" id="checkout-button" onClick={()=>deleteHandler(item)}>Delete</Button> </div>
                                </div>
                                <Divider component="li"  /> 
                            </>

                        )
                        
                    })} 
                    <div className="total-button">
                        <div>Total Price: ${totalPriceState} </div>
                        <Button variant="contained" id="checkout-button1" onClick={()=>dispatch(emptyListRed())}>Empty Cart</Button>
                        <Button variant="contained" id="checkout-button2" onClick={()=>Navigate("/buy")}>Buy</Button>
                    </div>
                        
                    
                </div>  
            </Grid> 

            )}
            
        </>
        
    )

}

export default Checkout

//onClick={()=>dispatch(deleteProduct({item}))}