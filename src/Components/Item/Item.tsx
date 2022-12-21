import React from "react";
import { Grid,Container } from "@mui/material";
import "./styleItem.css"
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";

const Item=({data,origin,keyOk}:any)=>{
    const{id,img,imgDetail,title,quantity,price,description,category,rating}=data
    const{AddCart,cartList}=useContext(ContextElement)
//recibo product tb, aca no lo uso, paso data directo como producto, pero en checkout si necesitaba pasarle el producto a addHandler, asique para q la funcion sea igual aca tb le paso
    const addHandler=(quantity:any, product:any)=>{
       
        AddCart(data,quantity)
    }
    console.log(cartList, "cartList")

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
                    <Grid item md={12} xs={12} key={id} >
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
                
                    </Grid>
                )}
                
            </>

            
      
        
        
    )
}

export default Item
/*  <div className="info-description">
                                    <div className="info-text">
                                        <p>Description:</p> <div className="div-text"> {description} </div>
                                    </div>
                                    <div className="info-text">
                                        <p>Unit Price:   </p> <div className="div-text"> {price} </div>
                                    </div>
                                    <div className="info-text">
                                        <p>Rating:   </p><div className="div-text"> {rating} </div>
                                    </div>
                                </div>*/

