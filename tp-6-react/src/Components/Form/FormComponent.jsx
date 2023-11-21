// src/components/Formulario.js

import React, { useState } from 'react';

function validarContrasena(contrasena) {
    const expresionRegular = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,15}$/;
    return expresionRegular.test(contrasena);
}

const Formulario = () => {
    // Estados para almacenar los valores de los campos del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmacionContrasena, setConfirmacionContrasena] = useState('');

    // Manejador de cambios para cada campo
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Actualizar el estado correspondiente según el nombre del campo
        switch (name) {
            case 'nombre':
                setNombre(value);
                break;
            case 'apellido':
                setApellido(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'telefono':
                setTelefono(value);
                break;
            case 'contrasena':
                setContrasena(value);
                break;
            case 'confirmacionContrasena':
                setConfirmacionContrasena(value);
                break;
            default:
                break;
        }
    };

    // Validación del formulario
    const formularioInvalido = nombre === "" || apellido === "" || email === "" || telefono === "" || contrasena === "" || confirmacionContrasena === "" || validarContrasena(contrasena) === false || contrasena !== confirmacionContrasena;


    // Manejador de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "") {
            alert("El nombre no puede estar vacío.");
        } else if (apellido === "") {
            alert("El apellido no puede estar vacío.");
        } else if (email === "" || !email.includes("@")) {
            alert("Por favor, ingresá un email válido.");
        } else if (contrasena === "") {
            alert("La contraseña no puede estar vacía.");
        } else if (confirmacionContrasena === "") {
            alert("La confirmación no puede estar vacía.");
        } else if (contrasena !== confirmacionContrasena) {
            alert("Las contraseñas no coinciden.");
        } else if (!validarContrasena(contrasena)) {
            alert("La contraseña debe contener al menos una mayúscula, una minúscula, un número y un carácter especial, y no debe ser más larga de 12 caracteres.");
        } else if (contrasena !== confirmacionContrasena) {
            console.log('La contraseña y la confirmación de la contraseña no coinciden.');
            return;
        }
        else {
            alert(`Su cuenta a sido creada con los siguientes datos:\nNombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="form-label text-start text-secondary fw-bolder">
                    Nombre:
                    <input name='nombre' type="text" className="form-control text-muted" placeholder="Ej: Juan" value={nombre} onChange={handleInputChange} />
                </label>
                <br />
                <label className="form-label text-start text-secondary fw-bolder">
                    Apellido:
                    <input name='apellido' type="text" className="form-control text-muted" placeholder="Ej: Perez" value={apellido} onChange={handleInputChange} />
                </label>
                <br />
                <label className="form-label text-start text-secondary fw-bolder">
                    Email:
                    <input name='email' type="email" className="form-control text-muted" placeholder="name@example.com" value={email} onChange={handleInputChange} />
                </label>
                <br />
                <label className="form-label text-start text-secondary fw-bolder">
                    Teléfono:
                    <input name='telefono' type="number" className="form-control text-muted" placeholder="(xxx) xxx-xxxx" value={telefono} onChange={handleInputChange} />
                </label>
                <br />
                <label className="form-label text-start text-secondary fw-bolder">
                    Contraseña:
                    <input name='contrasena' type="password" className="form-control text-muted" placeholder="Aa1@" value={contrasena} onChange={handleInputChange} />
                </label>
                <br />
                <label className="form-label text-start text-secondary fw-bolder">
                    Confirmar Contraseña:
                    <input name='confirmacionContrasena' type="password" className="form-control text-muted" placeholder="Aa1@" value={confirmacionContrasena} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit" className='btn btn-dark mt-3 px-5' disabled={formularioInvalido}>Enviar</button>
                <br />
            </form>
        </>
    );
};

export default Formulario;
