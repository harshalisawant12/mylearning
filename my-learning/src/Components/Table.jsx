import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { IoIosSave } from "react-icons/io";
import "./Table.css";
import { useState } from "react";
//Commit3 testing 


// I am testing PR request in this project
const Table = ({ rows, deleteRow, editRow }) => {
  const [edit, setEdit] = useState([]);
  const [formState, setFormState] = useState({
   
  });
  const onEditRow = (targetIndex) => {
    setFormState((prev)=>({...prev, [targetIndex]:rows[targetIndex]}));
    setEdit((prevIndex)=>prevIndex.includes(targetIndex)?prevIndex:[...prevIndex,targetIndex]);
  };
  const handleChange = (e,idx) => {
    const { name, value } = e.target;
    setFormState((prev)=>({
     ...prev,
     [idx]:{
        ...prev[idx],
        [name]:value
     }
    }));
  };
  const handleSave = (ind) => {
    const updateRow = rows.map((row, idx) => (idx == ind ? formState[ind] : row));
    console.log(rows);

    editRow(updateRow);
    setEdit(edit.filter((item)=>item!==ind));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Page</th>
          <th className="expand">Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => {
          return (
            <tr key={idx}>
              <td>{row.page}</td>
              {edit.includes(idx)? (
                <>
                  <td>
                    <textarea
                      name="description"
                      value={formState[idx].description}
                      onChange={(e)=>handleChange(e,idx)}
                    />
                  </td>
                  <td>
                    <select
                      name="status"
                      value={formState[idx].status}
                      onChange={(e)=>handleChange(e,idx)}
                    >
                      <option value="Live">Live</option>
                      <option value="Draft">Draft</option>
                      <option value="Error">Error</option>
                    </select>
                  </td>
                  <td className="actions">
                    <IoIosSave
                      className="mySave"
                      button
                      onClick={() => handleSave(idx)}
                    />
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => {
                        deleteRow(idx);
                        setEdit([[]]);
                      }}
                    />
                  </td>
                </>
              ) : (
                <>
                  <td className="expand">{row.description}</td>
                  <td>
                    <span className={`label label-${row.status}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => {
                        deleteRow(idx);
                        setEdit([]);
                      }}
                    />{" "}
                    <BsFillPencilFill onClick={() => onEditRow(idx)} />
                  </td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
