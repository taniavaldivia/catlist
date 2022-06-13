import { useState, useEffect } from "react";

export default function Modal({ open, close, catName, updateCat, index,  }) {
  const [actualizarGato, setActualizarGato] = useState("")

  useEffect(() => {
    setActualizarGato('')
  }, [open]);

  return (
    <div className="modal" style={{display: (open ? "block" : "none") }} onClick={() => { close() }}>
      <div className="modal-content" onClick={e => {e.stopPropagation()}} >
        <span className="close" onClick={() => { close() }}>&times;</span>
        <h3>Update Cat: {catName}</h3>
        <input value={actualizarGato} onChange={(e) => { setActualizarGato(e.target.value) }} />
        <button onClick={() => {updateCat(index, actualizarGato)}}>Update</button>
      </div>
    </div>
  );
}
  
  
  