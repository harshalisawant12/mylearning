import { useState } from "react";
import Table from "./Components/Table";
import "./App.css";
import Modal from "./Components/Modal";
import PopupModal from "./Components/PopupModal";
import { CountryProvider } from "./Components/Context";
import Navbar from "./Components/Navbar";
import { Routes,Route, useLocation } from "react-router-dom";
import Child from "./Components/Child";
import { createContext } from "react";
const context =createContext();
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
  const location=useLocation();
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
      <CountryProvider>
      <Navbar/>
     <Routes> 

     <Route path="/" element={ <Table rows={rows} deleteRow={(idx)=>{setSelectedRow(idx);setPopupModalOpen(true)}} editRow={handleEditRow} />}/>
      <Route path="/Destination" element={<Child/>}/>
     </Routes>
     { popupModalOpen && selectedRow!==null&& rows[selectedRow]&& (<PopupModal onDelete={()=>{handleDeleteRow(selectedRow); setPopupModalOpen(false)}} onCancel={()=>setPopupModalOpen(false)} row={rows[selectedRow]}/>)}
     {location.pathname==="/" && (
          <button className="btn" onClick={() => setModalOpen(true)}>
            Add
          </button>) }
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    
        </CountryProvider> 
     
    </div>
  );
}
