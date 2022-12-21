import React,{useState,useEffect} from "react";
import Button from '@mui/material/Button';
import "./styleCounter.css"
//import { useContext } from "react";
//import { ContextElement } from "../../Context/Context";

interface DataType{
    addHandler:(quantity:any, product:any)=>any,
    initial:number,
    product:{
        id:number,
        img:string,
        imgDetail:string,
        title:string,
        price:number,
        quantity:number,
        description:string,
        category:string,
        rating:string

    }
}

const ItemCount=({addHandler,initial,product}:DataType)=>{
    const[count,setCount]=useState(initial)
    //const{AddCart}=useContext(ContextElement)

    const add=()=>{
        setCount(count+1)
    }

    const minus=()=>{
        if(count>=1){
            setCount(count-1)
        }
    }

    return(
    
        <>  
            <div className="counter">
                <p onClick={minus} >-</p>
                <p>{count}</p>
                <p onClick={add}>+</p>
            </div>
            <div className="counter-button">
                <Button variant="contained" onClick={()=>addHandler(count,product)}>Units</Button>

            </div>
        </>
    
    )
}

export default ItemCount