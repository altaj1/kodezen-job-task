import React, { useState } from 'react';
import { SortableContainer,  } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './App.css';
import { SortableItem } from './SortableItem';
import { SortableList } from './SortableList';
const initialColors = [
  { id: 1, title: 'Primary', color: '#FF0000' },
  { id: 2, title: 'Secondary', color: '#00FF00' },
  { id: 3, title: 'Title Text', color: '#0000FF' },
];
function App() {
  const [colors, setColors] = useState(initialColors);
  const [showMenu, setShowMenu] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
 
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const addItem = () => {
    setColors([...colors, { id: Date.now(), title: 'New Color', color: '#FFFFFF' }]);
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
    setColors([...colors, { ...item, id: Date.now(), title: `${item.title} Copy` }]);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setCurrentItem(null);
  };

  return (
    <div className="kzui-app">
      <header className="kzui-header">Color List</header>

    

      <SortableList
        items={colors}
        colors = {colors}
        setColors={setColors}
        onSortEnd={onSortEnd}
        onEdit={editItem}
        onDelete={deleteItem}
        onDuplicate={duplicateItem}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
        <button className="kzui-add-button" onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
