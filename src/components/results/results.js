import { hotelsData } from '../data/data.js'
import { useState, React } from 'react'
import { Cards } from '../cards/cards'
import './results.css'
export function Results(props) {
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
					priceCalculator={priceCalculator}
				/>
			))}
		</div>
	)
}
