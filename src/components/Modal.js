import { useState } from "react";

export default function Modal({ open, close, catName, updateCat, index }) {
  const [actualizarGato, setActualizarGato] = useState("")

  return (
    <div 
      className="modal" 
      // El style tiene un terniario (if en una sola linea) es para decirle al codigo que si es true se ve
      //el modal y si es false no se vea
      style={{display: (open ? "block" : "none") }}>
        <div className="modal-content">
          <span className="close" onClick={() => { close() }}>&times;</span>
          <h3>Update Cat: {catName}</h3>
          <input value={actualizarGato} onChange={(e) => { setActualizarGato(e.target.value) }} />
          <button onClick={() => {updateCat(index, actualizarGato)}}>Update</button>
        </div>
    </div>     
  );
}
  
  
  