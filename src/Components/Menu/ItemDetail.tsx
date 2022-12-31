import React,{useState,useEffect} from "react";
import MockMenu from "../Mock/MockMenu";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

import { Grid } from "@mui/material";
import "./styleItemDetail.css"

const ItemDetail=()=>{
    const[list,setList]=useState<any>([])
    const{id}=useParams()


    //aca en backend deberia llamarse a la ruta de findbyid
    const GetObject=()=>{
        return new Promise((resolve,reject)=>{
            return resolve(MockMenu)
        })
    }

    useEffect(()=>{
        GetObject().then((list)=>{
            setList(list)
        })
    },[])

    console.log(list, "listdetail")
    return(
        <Grid container className="menu-container-detail">
            {list.map((product:any)=>{
                if(product.id==id){
                    return <Item data={product} origin={"detail"} keyOk={product.id} />
                    
                }
            })}

            
           

        </Grid>
    )

}


export default ItemDetail

//return <Detail data={product} origin="detail"/>