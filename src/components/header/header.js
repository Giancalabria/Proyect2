import styles from './header.module.scss'

export function Header(props) {
	function naturalDate(date) {
		let d = new Date(date + ' 00:00'),
			month = d.getMonth(),
			day = d.getDate(),
			year = d.getFullYear()

		switch (month) {
			case 0:
				month = 'Enero'
				break
			case 1:
				month = 'Febrero'
				break
			case 2:
				month = 'Marzo'
				break
			case 3:
				month = 'Abril'
				break
			case 4:
				month = 'Mayo'
				break
			case 5:
				month = 'Junio'
				break
			case 6:
				month = 'Julio'
				break
			case 7:
				month = 'Agosto'
				break
			case 8:
				month = 'Septiembre'
				break
			case 9:
				month = 'Octubre'
				break
			case 10:
				month = 'Noviembre'
				break
			case 11:
				month = 'Diciembre'
				break
			default:
				break
		}
		return `${day} de ${month} del ${year}`
	}
	return (
		<header className={styles.header}>
			<div className={styles.text_container}>
				<h2 className={styles.title}> Trivago 2.0</h2>
				<p className={styles.text}>
					{`Buscando hoteles  
					${
						props.size === 'todos' || props.size === 'select'
							? ' de cualquier tamaño'
							: props.size + 's'
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
		</header>
	)
}
