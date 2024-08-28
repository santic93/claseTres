import React, { useEffect, useState } from 'react'

////RECIBO MIS PROPS EN EL COMPONENTE
export const ClaseTres = ({ props, setProps }) => {
	console.log(props, setProps)
	const [nombre, setNombre] = useState('')
	const [apellido, setApellido] = useState('')
	const [requerido, setRequerido] = useState(false)
	const handleSubmit = (evento) => {
		evento.preventDefault()
		if (nombre.trim() && apellido.trim()) {
			alert(`Bienvenid@ ${nombre} ${apellido}`)
			setNombre('')
			setApellido('')
		} else {
			setRequerido(true)
		}
	}
	const handleChange = (evento) => {
		const { name } = evento.target
		name === 'nombre' && setNombre(evento.target.value)
		name === 'apellido' && setApellido(evento.target.value)
		setRequerido(false)
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="nombre"
					onChange={handleChange}
					value={nombre}
					name="nombre"
					//required
				/>
				<br />
				<hr />
				<input
					type="text"
					placeholder="apellido"
					onChange={handleChange}
					value={apellido}
					name="apellido"
					//required
				/>
				<br />
				<hr />

				<button type="submit">Enviar</button>
				<br />
				<hr />
				<b>{requerido && 'Todos los campos son obligatorios'}</b>
			</form>
		</div>
	)
}
