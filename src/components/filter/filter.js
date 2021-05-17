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
				<select
					className='select'
					value={props.country}
					onChange={props.handleCountry}
				>
					<option className='option' value='select' disabled>
						Seleccione un pais
					</option>
					<option className='option' value='todos'>
						Todos
					</option>
					<option className='option' value='brasil'>
						Brasil
					</option>
					<option className='option' value='argentina'>
						Argentina
					</option>
					<option className='option' value='chile'>
						Chile
					</option>
					<option className='option' value='uruguay'>
						Uruguay
					</option>
				</select>
			</div>
			<div className='contenedor-filtros'>
				<select
					className='select'
					value={props.size}
					onChange={props.handleSize}
				>
					<option className='option' value='select' disabled>
						Seleccione un tamaño
					</option>
					<option className='option' value='todos'>
						Todos
					</option>
					<option className='option' value='chico'>
						Chico
					</option>
					<option className='option' value='mediano'>
						Mediano
					</option>
					<option className='option' value='grande'>
						Grande
					</option>
				</select>
			</div>
			<div className='contenedor-filtros'>
				<select
					className='select'
					value={props.price}
					onChange={props.handlePrice}
				>
					<option className='option' value='select' disabled>
						Seleccione un precio
					</option>
					<option className='option' value='todos'>
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
