import './header.css'

export function Header(props) {
	return (
		<div className='header'>
			<div className='text-div'>
				<h2 className='title'> Hoteles</h2>
				<p className='text'>
					desde el <span className='negrita'>martes, 1 de enero de 2019</span>{' '}
					hasta el
					<span className='negrita'> miércoles, 2 de enero de 2019</span>
				</p>
			</div>
		</div>
	)
}
