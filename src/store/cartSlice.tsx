import { createSlice } from '@reduxjs/toolkit'//1 importo createSlice, gracias a estos no hay que escuchasr los types de los reducer


const initialState:any={//2 aca defino como va a ser el state inicial para el reduce, puedo poner mas de una cosa, lo podria poner abajo en initialState
    cartListRed:[],
   totalPriceState:100
}

export const cartSlice:any = createSlice({
    name: 'cart',//3 palabra clave hay q poner
    initialState: initialState,//4 el initial State
    reducers: {//5 aca van los reducers, que serian las funciones 
      addProduct:(state,action)=>{//6 state, toma el initial state. action, son las acciones q recibe desp cdo se ejecuta desde un componente
        //7 adentro va codigo como si fuese una funcion de context, una funcion normal. la action la toma con .payload. si por funcion habdler el componente mando 2 parametros aca, 
        //por ejemplo product y quantity, desde handler lo mando como product y quantity, y aca lo recibo como action.payload.product y action.payload.quantity y lo recibe ok cada dato 

        //action.payload.quantity es el quantity que recibe desde addhandler, tiene que mandarse como quantity
        //action.payload.product es el product que recibe, tiene que mandarse como product
        let check:boolean=false
        let find=state.cartListRed.find((x:any)=>x.id==action.payload.product.id)//busca si esta ese prod, si no esta lo agrega
        if(find==undefined){
          action.payload.product.quantity=action.payload.quantity
            state.cartListRed=[...state.cartListRed,action.payload.product]
        }else{//si esta, itera en la lista y le cambia cantidad
           for(const item of state.cartListRed){//le cambia cant al q ya tiene
          
              if(item.id==action.payload.product.id)
              item.quantity=action.payload.quantity
              check=true
        }
       

        }
     
      },
      emptyListRed:(state)=>{state.cartListRed=[]; state.totalPriceState=0},//esta es otra reducer, como no cambia estado, digamos q ya lo define aca, no hace falta action, porq no recibe un parametro desde la funcion
      //va a 0 ttalPri
      deleteProduct:(state,action)=>{
        const id=action.payload.item.id//recibo todo el item, y aca tomo solo el id para borrar el producto
        const filterById=state.cartListRed.filter((x:any)=>x.id!=id)
        state.cartListRed=filterById
      }, 
      totalPrice:(state, action)=>{
      alert("ok")
        let price=0
        for(const item of state.cartListRed){
          price=price+item.quantity*item.price
        }
        state.totalPriceState=price
//alert(state.totalPriceState)
      }
      

    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addProduct,emptyListRed,deleteProduct,totalPrice } = cartSlice.actions//8aca poner cada reducer que hago
  
  export default cartSlice.reducer//9exportar todo