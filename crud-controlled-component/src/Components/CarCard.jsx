import React from 'react'

const CarCard = (props) => {
  return (
    <div>
       <p><strong>Name:</strong> {props.name}</p>
       <p><strong>Surname:</strong> {props.surname}</p>
    </div>
  )
}

export default CarCard
