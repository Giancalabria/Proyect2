import './header.css'
import { useEffect } from 'react'

export function Header(props) {
	function naturalDate(date) {
		let d = new Date(date + ' 00:00'),
			month = d.getMonth(),
			day = d.getDate(),
			year = d.getFullYear()

		if (month === 0) {
			month = 'Enero'
		} else if (month === 1) {
			month = 'Febrero'
		} else if (month === 2) {
			month = 'Marzo'
		} else if (month === 3) {
			month = 'Abril'
		} else if (month === 4) {
			month = 'Mayo'
		} else if (month === 5) {
			month = 'Junio'
		} else if (month === 6) {
			month = 'Julio'
		} else if (month === 7) {
			month = 'Agosto'
		} else if (month === 8) {
			month = 'Septiembre'
		} else if (month === 9) {
			month = 'Octubre'
		} else if (month === 10) {
			month = 'Noviembre'
		} else month = 'Diciembre'

		return `${day} de ${month} del ${year}`
	}
	return (
		<div className='header'>
			<div className='text-div'>
				<h2 className='title'> Hoteles</h2>
				<p className='text'>
					{`Buscando hoteles de 
					${
						props.size === 'todos' || props.size === 'select'
							? 'cualquier tamaño'
							: props.size
					}, 
					de precio ${
						props.price === 'todos' || props.price === 'select'
							? `sin definir`
							: `nivel: ${props.price}`
					},
					 ${
							!props.dateFrom
								? 'sin fecha de ingreso definida'
								: `desde el ${naturalDate(props.dateFrom)}`
						},
					 ${
							!props.dateTo
								? 'sin fecha de egreso definida'
								: `hasta el ${naturalDate(props.dateTo)}`
						}
					 y en ${
							props.country === 'todos' || props.country === 'select'
								? 'cualquier país'
								: props.country
						}`}
				</p>
			</div>
		</div>
	)
}
