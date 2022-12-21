import React,{useState,useEffect} from "react";
import {createContext} from "react"

const contextType={//asi doy tipo a lista en ts, detallar las keys del obj
    cartList:[{id:1,
        img:"",
        imgDetail:"",
        title:"",
        price:1,
        quantity:1,
        description:"",
        category:"",
        rating:""}],
    AddCart:(product:any,quantity:any)=>{return product},//aca pongo los parametros q tiene en realidad la funcion
    priceOk:0,
    TotalPrice:()=>{},
    EmptyCart:()=>{},
    DeleteProduct:(id:any)=>{return id}

}

const ContextElement=createContext(contextType)

interface ChildInt{
    children:React.ReactNode
}

const Context=({children}:ChildInt)=>{
    const[cartList,setCartList]=useState<any>([])
    const[priceOk, setPriceOk]=useState<number>(0)//es para precio total de la lista

    const AddCart=(product:any,quantity:any)=>{
        product.quantity=quantity
        //asi le doy type al x
        const find=cartList.find((x:any)=>x.id==product.id)
        //si no encuentra nada con ese id, agrego el producto
        if(find==undefined){
            setCartList([...cartList,product])
        }else{//si encuentra, actualizo la cantidad, find lo corregie en lista original, no crea nueva lista 
            find.quantity=quantity
         //ver si se puede modificar el quantity del objeto de otra forma, esto es direct mutate state, estaria mal  
        }   
        //con este total price, cada vez q se actualice cant, se actualiza totalprice. con esto tb se actualiza solo precio en price de cada prod 
        TotalPrice()
    
    }

        //para precio total de la lista
        const TotalPrice=()=>{
         
            let price=0
            for (const item of cartList){
                price=price+item.quantity*item.price

            }

            setPriceOk(price)
            
        }

        const EmptyCart=()=>{
            setCartList([])
        }

        const DeleteProduct=(id:any)=>{
            const filterOk=cartList.filter((x:any)=>x.id!=id)
            setCartList(filterOk)
        }

//con este useeffect, se ve ok el price total cdo abro por primera vez checkout
        useEffect(()=>{
            TotalPrice()
        },[AddCart])

       

    const dataContext={cartList,AddCart,priceOk,TotalPrice,EmptyCart,DeleteProduct}


    return(
        <>
            <ContextElement.Provider value={dataContext}>
                {children}
            </ContextElement.Provider>
        </>
    )

}

export default Context
export {ContextElement}