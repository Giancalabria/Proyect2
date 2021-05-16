import './filter.css'

export function Filter(props) {
	return (
		<div className='filter'>
			<div className='contenedor-filtros'>
				<input className='input' type='date'></input>
			</div>
			<div className='contenedor-filtros'>
				<input className='input' type='date'></input>
			</div>
			<div className='contenedor-filtros'>
				<p>País</p>
				<select
					className='select'
					value={props.country}
					onChange={props.handleCountry}
				>
					<option value='Todos'>Todos</option>
					<option value='Brasil'>Brasil</option>
					<option value='Argentina'>Argentina</option>
					<option value='Chile'>Chile</option>
					<option value='Uruguay'>Uruguay</option>
				</select>
			</div>
			<div className='contenedor-filtros'>
				<p>Tamaño</p>
				<select
					className='select'
					value={props.size}
					onChange={props.handleSize}
				>
					<option value='Todos'>Todos</option>
					<option value='Chico'>Chico</option>
					<option value='Mediano'>Mediano</option>
					<option value='Grande'>Grande</option>
				</select>
			</div>
			<div className='contenedor-filtros'>
				<p>Precio</p>
				<select
					className='select'
					value={props.price}
					onChange={props.handlePrice}
				>
					<option value='Todos'>Todos</option>
					<option value='1'>$</option>
					<option value='2'>$$</option>
					<option value='3'>$$$</option>
					<option value='4'>$$$$</option>
				</select>
			</div>
		</div>
	)
}
