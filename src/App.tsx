import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/app";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reservationInput,setReservationInput]=useState("")

  const reservations =useSelector((state:RootState)=> state.reservations.value);
  const customers=useSelector((state:RootState)=>{
    return state.customer.value
})
  const dispatch=useDispatch();

  function handleAddReservation(){
    if(!reservationInput)
    return;
    dispatch(addReservation(reservationInput))
    setReservationInput("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservation,index)=>{
                return <ReservationCard name={reservation} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationInput} onChange={(e)=>setReservationInput(e.target.value)}/>
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer,index)=>{
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;