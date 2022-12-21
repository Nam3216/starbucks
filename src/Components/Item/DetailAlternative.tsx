import React from "react";
import { Grid,Container } from "@mui/material";
//import "./styleItem.css"
import { Link } from "react-router-dom";

const Detail=({data,origin}:any)=>{
    const{id,img,imgDetail,title,quantity,price,description,category}=data

    return(      
            <>
            <Grid container>
        
                <Grid item md={4} xs={12} className="item" >
                        
                        <img src={imgDetail} alt="loading"/>
                        <p>{title} </p>
                
                </Grid>
            </Grid>

            
                
            </>

            
      
        
        
    )
}

export default Detail