export default function Cat({ index, name, delCat, updCat}) {
  return (
    <div>
      <h5>{name}</h5>
      <button onClick={() => { updCat(index) }}>Actualizar</button>
      <button onClick={() => { delCat(index) }}>Borrar gato</button>
    </div>
  );
}


