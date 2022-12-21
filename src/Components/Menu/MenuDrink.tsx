import React,{useState,useEffect} from "react"
import MockMenu from "../Mock/MockMenu"
import axios from "axios"
import Item from "../Item/Item"
import { Grid,Container } from "@mui/material";
import "./styleMenu.css"

const MenuDrink=()=>{
    const[list,setList]=useState<any>([])
    const Menu=MockMenu
    /*const GetApi=async()=>{
        try{
            const items=await axios.get(Menu)
        }
        catch{

        }
    }*/

    const GetList=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(MockMenu)
            },2000)
        })
    }

    useEffect(()=>{
        GetList().then((list)=>{
            setList(list)
        })
    },[])

    console.log(list,"list")


    return(
        <Grid container className="menu-container-menu">
            <div className="drink">
                <h3>Drinks</h3>
            </div>
           <Grid container className="menu-container">
            {list.map((product:any)=>{
                if(product.category=="drink"){
                    return <Item data={product} origin={"menu"} keyOk={product.id}/>
                }
               
            })}
          
          </Grid>
        </Grid>
    )
}

export default MenuDrink