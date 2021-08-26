import TodoForm from "../components/TodoForm";
import TodoTable from "../components/TodoTable";
import { useState } from "react";

const Todo = () => {
  const [dataToTable, setDataToTable] = useState([]);
  const dataHandler = (data) => {
    const newData = [...dataToTable];
    newData.push(data);
    setDataToTable(newData);
  };

  const deleteSingleItem = (key) => {
    const newData = dataToTable;
    const index = newData.findIndex((item) => key === item.key);
    newData.splice(index, 1);
    setDataToTable([...newData]); // Assigning a new object can trigger React to rerender
  };

  const deleteSelectedItems = (selectedRowKeys) => {
    const newData = dataToTable;
    let index = null;
    selectedRowKeys.forEach((keyNum) => {
      index = newData.findIndex((item) => keyNum === item.key);
      newData.splice(index, 1);
    });
    setDataToTable([...newData]);
  };

  return (
    <div className="todo" style={{ display: "flex", flexDirection: "row" }}>
      <TodoForm onSubmit={dataHandler} />
      <TodoTable
        dataToTable={dataToTable}
        deleteSingleItem={deleteSingleItem}
        deleteSelectedItems={deleteSelectedItems}
      />
    </div>
  );
};

export default Todo;
