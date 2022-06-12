import { useState } from "react";
import Cat from "../components/Cat"
import Modal from "../components/Modal"

export default function Catlist() {
  const [catlist, setCatlist] = useState(["michi", "marco antonio"])
  const [addCatName, setAddCatName] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCat, setSelectedCat] = useState("")

  const addCat = (catName) => {
    setCatlist([...catlist, catName])
  }

  const deleteCat = (index) => {
    const array = [...catlist]
    array.splice(index, 1)
    setCatlist(array)
  }

  const updateCatModal = (index) => {
    setModalOpen(true)
    setSelectedCat(index)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const updateCat = (index, newName) => {
    const array = [...catlist]
    array[index] = newName
    setCatlist(array)
  }

  return (
    <div>
      <input value={addCatName} onChange={(e) => { setAddCatName(e.target.value) }} />
      <button onClick={() => { addCat(addCatName) }}>Add Cat</button>
      <button onClick={() => { setCatlist([]) }}>Borrar TODOS</button>

      <div id="main">
        {catlist.map((cat, index) => {
          return <Cat key={index} index={index} name={cat} delCat={deleteCat} updCat={updateCatModal}/>
        })}
      </div>

      <Modal open={modalOpen} close={closeModal} catName={catlist[selectedCat]} updateCat={updateCat} index={selectedCat} />
    </div>
  );
}


