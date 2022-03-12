import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/app'
import { addFood } from '../features/customerSlice'

interface CustomerCard{
    name:string,
    food:string[],
    id:string
}

function CustomerCard({id, name, food }:CustomerCard) {

const dispatch=useDispatch()
const [customerFood,setCustomerFood]=useState("")

function handleClick(){
    console.log(customerFood);
    
dispatch(addFood({id,food:customerFood}))
}

  return (
    <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                  {food.map(item=>{
                     return <p key={item}>{item}</p>
                  })}
              </div>
              <div className="customer-food-input-container">
                <input value={customerFood} onChange={(e)=>setCustomerFood(e.target.value)} />
                <button onClick={handleClick} >Add</button>
              </div>
            </div>
          </div>
  )
}

export default CustomerCard