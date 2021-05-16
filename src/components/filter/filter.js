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
					<option className='option' value='Todos'>
						Todos
					</option>
					<option className='option' value='Brasil'>
						Brasil
					</option>
					<option className='option' value='Argentina'>
						Argentina
					</option>
					<option className='option' value='Chile'>
						Chile
					</option>
					<option className='option' value='Uruguay'>
						Uruguay
					</option>
				</select>
			</div>
			<div className='contenedor-filtros'>
				<p>Tamaño</p>
				<select
					className='select'
					value={props.size}
					onChange={props.handleSize}
				>
					<option className='option' value='Todos'>
						Todos
					</option>
					<option className='option' value='Chico'>
						Chico
					</option>
					<option className='option' value='Mediano'>
						Mediano
					</option>
					<option className='option' value='Grande'>
						Grande
					</option>
				</select>
			</div>
			<div className='contenedor-filtros'>
				<p>Precio</p>
				<select
					className='select'
					value={props.price}
					onChange={props.handlePrice}
				>
					<option className='option' value='Todos'>
						Todos
					</option>
					<option className='option' value='1'>
						$
					</option>
					<option className='option' value='2'>
						$$
					</option>
					<option className='option' value='3'>
						$$$
					</option>
					<option className='option' value='4'>
						$$$$
					</option>
				</select>
			</div>
		</div>
	)
}
