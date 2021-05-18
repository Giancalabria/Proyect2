import React from 'react'
import { Cards } from '../cards/cards'
import './results.css'
export function Results(props) {
	function onBooked(name) {
		alert(` El hotel "${name}" se ha reservado satisfactoriamente`)
	}
	return (
		<div className='results'>
			{props.newHotelsData.map((objeto, index) => (
				<Cards
					key={index}
					name={objeto.name}
					photo={objeto.photo}
					description={objeto.description}
					city={objeto.city}
					country={objeto.country}
					rooms={objeto.rooms}
					price={objeto.price}
					onBooked={() => onBooked(objeto.name)}
				/>
			))}
		</div>
	)
}
