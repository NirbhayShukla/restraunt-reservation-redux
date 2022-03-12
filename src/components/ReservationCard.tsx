import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import {v4 as uuid} from "uuid"

interface ReservationCardTypes{
  name:string,
  index:number
}

function ReservationCard({name,index}:ReservationCardTypes) {

const dispatch=useDispatch();

function handleRemove(){
  dispatch(removeReservation(index))
  dispatch(addCustomer({id:uuid(),name,food:[]}))
}

  return (
    <div className="reservation-card-container" onClick={handleRemove} >
      {name}
    </div>
  )
}

export default ReservationCard