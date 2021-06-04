import styles from './filter.module.scss'

export function Filter(props) {
	return (
		<div className={styles.filter}>
			<div className={styles.filter_container}>
				<input
					className={styles.input}
					type='text'
					value={props.name}
					onChange={props.handlerName}
					placeholder='Ingrese el nombre del hotel'
				></input>
			</div>
			<div className={styles.filter_container}>
				<input
					className={styles.input}
					type='date'
					value={props.dateFrom}
					onChange={props.handlerDateFrom}
				></input>
			</div>
			<div className={styles.filter_container}>
				<input
					className={styles.input}
					type='date'
					value={props.dateTo}
					onChange={props.handlerDateTo}
				></input>
			</div>
			<div className={styles.filter_container}>
				<select
					className={styles.select}
					value={props.country}
					onChange={props.handlerCountry}
				>
					<option className={styles.option} value='select' disabled>
						Seleccione un pais
					</option>
					<option className={styles.option} value='todos'>
						Todos los paises
					</option>
					<option className={styles.option} value='Brasil'>
						Brasil
					</option>
					<option className={styles.option} value='Argentina'>
						Argentina
					</option>
					<option className={styles.option} value='Chile'>
						Chile
					</option>
					<option className={styles.option} value='Uruguay'>
						Uruguay
					</option>
				</select>
			</div>
			<div className={styles.filter_container}>
				<select
					className={styles.select}
					value={props.size}
					onChange={props.handlerSize}
				>
					<option className={styles.option} value='select' disabled>
						Seleccione un tamaño
					</option>
					<option className={styles.option} value='todos'>
						Todos
					</option>
					<option className={styles.option} value='chico'>
						Chico
					</option>
					<option className={styles.option} value='mediano'>
						Mediano
					</option>
					<option className={styles.option} value='grande'>
						Grande
					</option>
				</select>
			</div>
			<div className={styles.filter_container}>
				<select
					className={styles.select}
					value={props.price}
					onChange={props.handlerPrice}
				>
					<option className={styles.option} value='select' disabled>
						Seleccione un precio
					</option>
					<option className={styles.option} value='todos'>
						Todos
					</option>
					<option className={styles.option} value='1'>
						$
					</option>
					<option className={styles.option} value='2'>
						$$
					</option>
					<option className={styles.option} value='3'>
						$$$
					</option>
					<option className={styles.option} value='4'>
						$$$$
					</option>
				</select>
			</div>
			<button className={styles.button} onClick={props.resetFilters}>
				Reset
			</button>
		</div>
	)
}
