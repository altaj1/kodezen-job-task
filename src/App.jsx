import React, { useState } from "react";
import { SortableContainer } from "react-sortable-hoc";
import arrayMove from "array-move";
import "./App.css";
import { SortableItem } from "./SortableItem";
import { SortableList } from "./SortableList";
import { NewGroup } from "./NewGroup";

const initialColors = [
  { id: 1, title: "Primary", color: "#FF0000" },
  { id: 2, title: "Secondary", color: "#00FF00" },
  { id: 3, title: "Title Text", color: "#0000FF" },
];
function App() {
  const [colors, setColors] = useState(initialColors);
  const [showMenu, setShowMenu] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [newGroup, setNewGroup] = useState([1]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

 

  const editItem = (id) => {
    setCurrentItem(colors.find((item) => item.id === id));
    setIsDrawerOpen(true);
  };

  const deleteItem = (id) => {
    setColors(colors.filter((item) => item.id !== id));
  };

  const duplicateItem = (id) => {
    const item = colors.find((item) => item.id === id);
    setColors([
      ...colors,
      { ...item, id: Date.now(), title: `${item.title} Copy` },
    ]);
  };

  const handelDeleteGroup = (index) => {
    const updatedGroups = [...newGroup];
    updatedGroups.splice(index, 1);
    setNewGroup(updatedGroups);
    console.log(updatedGroups);
  };

  const handelNewGroup = () => [setNewGroup([...newGroup, 1])];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className="kzui-app">
      <header className="kzui-header">Color List</header>

      <SortableList
        items={colors}
        colors={colors}
        setColors={setColors}
        onSortEnd={onSortEnd}
        onEdit={editItem}
        onDelete={deleteItem}
        onDuplicate={duplicateItem}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <hr />
      <div>
        {newGroup.map((group, index) => (
          <div key={index}>
        

            <NewGroup
              // Use the index as the key since you are using a simple array of numbers
              items={colors}
              index={index}
              colors={colors}
              setColors={setColors}
              onSortEnd={onSortEnd}
              onEdit={editItem}
              onDelete={deleteItem}
              onDuplicate={duplicateItem}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            closeModal={closeModal}
            openModal={openModal}
            handelNewGroup={handelNewGroup}
            handelDeleteGroup={handelDeleteGroup}
            isModalOpen={isModalOpen}

            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
