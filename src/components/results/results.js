import React from 'react'
import { Cards } from './cards/cards'
import './results.css'
export function Results(props) {
	function onBooked(name) {
		alert(` El hotel "${name}" se ha reservado satisfactoriamente`)
	}
	const mappedHotels = props.filteredHotels.map((objeto, index) => (
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
	))
	const checkHotels = () => {
		if (mappedHotels.length >= 1) {
			return mappedHotels
		} else {
			return (
				<div className='div-error'>
					<h3 className='title-error'>
						Lo sentimos, no se han encontrado hoteles con los filtros
						seleccionados
					</h3>
					<p className='text-error'>Por favor, inténtelo de nuevo</p>
				</div>
			)
		}
	}
	return <div className='results'>{checkHotels()}</div>
}
