import React, { useState } from "react";
import { Grid,Container, Button } from "@mui/material";
import "./styleItem.css"
import { Link,useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';
import ItemCount from "../ItemCount/ItemCount";
//import { useContext } from "react";
//import { ContextElement } from "../../Context/Context";
import {useSelector,useDispatch} from "react-redux"//1useDispatc para ejecutar el action, la funcion
import { addProduct,totalPrice } from "../../store/cartSlice";//2 importo la funcion (el reducer) que voy a usar



const Item=({data,origin,keyOk}:any)=>{
    const[addTrue,setAddTrue]=useState(false)
    const{id,img,imgDetail,title,quantity,price,description,category,rating}=data
 //   const{AddCart,cartList}=useContext(ContextElement)
    const Navigate=useNavigate()
 
    const dispatch=useDispatch()//3 useDispatch
//recibo product tb, aca no lo uso, paso data directo como producto, pero en checkout si necesitaba pasarle el producto a addHandler, asique para q la funcion sea igual aca tb le paso
    const addHandler=(quantity:any, product:any)=>{
   
      //  AddCart(data,quantity)
      dispatch(addProduct({//4 desde un handler funcion, o desde el onclick mismo, pongo dispatch(reducer({y aca lo que le paso, las action.payload que espera, en este caso le paso product y quantity. en reducer lo tengo q recibir como action.payload.product y action.payoad.quantitiy}))
        product,
        quantity
      }))
        setAddTrue(true)
        dispatch(totalPrice())//asi se actualiza el totalPrice tb
    }//5 y ahi ya esta, ese addHandler se ejecuto desde un boton, pero es como cualquier funcion, es como si llamaria a funcion addProduct de context, pero aca la llamo a traves del dispatch


    return(      
            <>
                {origin =="menu" ? (
                    <Grid item md={4} xs={12} className="item" key={id} >
                        <Link to={`/detail/${id}`}>
                        <img src={img} alt="loading"/>
                        <p>{title} </p>
                        </Link>
                    </Grid>

                ):(
                    <Grid item md={12} xs={12} key={id} className="item-container" >
                        <div className="title-detail">
                            <div className="title-detail-content">
                                <img src={imgDetail} alt="loading" id="img-detail"/>
                                <p>{title}</p>
                            </div>
                           
                        </div>
                        <div className="info-detail">
                         
                            
                            <div className="description-detail">
                                <div className="info-title">
                                    <p >Detail</p>
                                    <Divider component="li"  />
                                </div>
                                <div className="info-description">
                                    <div className="info-description">
                                        <div className="info-text">
                                            <p>Description:</p> <div className="div-text"> {description} </div>
                                        </div>
                                        <div className="info-text">
                                            <p>Price:   </p> <div className="div-text">$ {price} </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="order-detail">
                                <div className="info-title">
                                    <p  >Order</p>
                                    <Divider component="li"  />
                                </div>
                                <ItemCount addHandler={addHandler} initial={1} product={data} />
                            </div>
                            
                            
                            
                        </div>
                        <div>
                        {addTrue && <Button variant="contained" id="button-buy" onClick={()=>Navigate("/buy")} >Buy Product</Button> }
                        </div>
                 
                        
                
                    </Grid>
                )}
                
            </>

            
      
        
        
    )
}

export default Item


