import { useState } from "react";
import Table from "./Components/Table";

import "./App.css";
import Modal from "./Components/Modal";
import PopupModal from "./Components/PopupModal";
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [popupModalOpen, setPopupModalOpen]=useState(false);
  const [selectedRow, setSelectedRow]=useState(null);
  const [selectedEditedData, setSelectedEditedData]=useState(null)
  const [rows, setRows] = useState([
    { page: "Page 1", description: "This is the First page", status: "Live" },
    { page: "Page 2", description: "This is the Second page", status: "Draft" },
    { page: "Page 3", description: "This is the Third page", status: "Error" },
  ]);
  //const [edit, setEdit] = useState(null);
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleSubmit = (newrow) => {
    setRows([...rows, newrow]);
  };
  const handleEditRow = (idx) => {
    setRows(idx);

    
  };
  return (
    <div className="App">
      <Table rows={rows} deleteRow={(idx)=>{setSelectedRow(idx);setPopupModalOpen(true)}} editRow={handleEditRow}/>
    { popupModalOpen && selectedRow!==null&& rows[selectedRow]&& (<PopupModal onDelete={()=>{handleDeleteRow(selectedRow); setPopupModalOpen(false)}} onCancel={()=>setPopupModalOpen(false)} row={rows[selectedRow]}/>)}
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add 
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
