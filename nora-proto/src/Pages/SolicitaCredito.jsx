//useState es un hook(activador) que nos permitira tener un estado local en el componente y manejar los valores que el usuario ingresa

import React, { useState } from "react";
import "./SolicitaCredito.css";
//definimos el componente SolicitarCredito
//creamos unas variables de estado con el hook
const SolicitaCredito = () => {
  const [TypeDocument, setTypeDocument] = useState('');
  const [NumeroDocumento, setNumeroDocumento] = useState('');
  const [Nombre, setNombre] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Correo, setCorreo] = useState('');
//Configuramos el monto 
//Valor [variable] = hook (Valor inicial)

  const [monto, setMonto] = useState(1000000);
  const [cuotas, setCuotas] = useState(1);
  const interesMensual = 0.02;

  const calcularCuota = () => {
    const i = interesMensual;
    const n = cuotas;
    const cuota = monto * (i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    return Math.round(cuota);
  };

  const cuotaMensual = calcularCuota();
  const total = cuotaMensual * cuotas;
//Funcion para enviar datos , con esto toma los datos del doom y los envia al backend 


const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    typedocument: TypeDocument,
    numerodocumento: NumeroDocumento,
    nombre: Nombre, // Nombre de la columna en la BD: "nombre"
    telefono: Telefono,
    correo: Correo,
    monto,
    cuotas,
    cuotaMensual,
    total
  };

  try {
    const response = await fetch("http://localhost:3001/solicitudes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Error en la respuesta del servidor");
    const data = await response.json();
    alert("Solicitud guardada: " + data.id);
  } catch (error) {
    console.error("Error:", error);
    alert("Error al guardar: " + error.message);
  }
};

  return (
    <div className="formulario-credito1" >
      <form onSubmit={handleSubmit} >
        <h2>Solicita tu crédito</h2>
        <label>
          Tipo de documento:
          <select value={TypeDocument} onChange={(e) => setTypeDocument(e.target.value)} required>
            <option value="">Seleccione</option>
            <option value="Cedula">Cédula</option>
            <option value="NIT">NIT</option>
          </select>
        </label>

        {TypeDocument && (
          <label>
            Número de {TypeDocument.toLowerCase()}:
            <input
              type="text"
              value={NumeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              required
            />
          </label>
        )}

        <label>
          Nombre completo:
          <input
            type="text"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

        <label>
          Teléfono:
          <input
            type="text"
            value={Telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </label>

        <label>
          Ingresa tu correo:
          <input
            type="text"
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </label>

        <button id="btn-enviar-credito" type="submit">Enviar</button>

      </form>

      <div className="simulador">
        <h2>Simulador de Crédito</h2>

        <label>
          Monto del préstamo: ${monto.toLocaleString()}
          <input
            type="range"
            min={1000000}
            max={10000000}
            step={50000}
            value={monto}
            onChange={(e) => setMonto(Number(e.target.value))}
          />
        </label>

        <label>
          Plazo en cuotas:
          <div className="selector-cuotas">
  {[1, 3, 6, 12, 36].map((num) => (
    <button
      key={num}
      type="button"
      className={`btn-cuota ${cuotas === num ? 'activa' : ''}`}
      onClick={() => setCuotas(num)}
    >
      {num} {num === 1 ? 'Cuota' : 'Cuotas'}
    </button>
  ))}
 </div>

        </label>

        <div style={{ marginTop: '1rem' }}>
          <p><strong>Cuota mensual:</strong> ${cuotaMensual.toLocaleString()}</p>
          <p><strong>Total a pagar:</strong> ${total.toLocaleString()}</p>
        </div>
      </div>
    </div>
   );
 }
 

export default SolicitaCredito;
