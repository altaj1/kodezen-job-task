import { SortableContainer } from "react-sortable-hoc";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Sidebar from "./Sidebar";
export const  SortableList = SortableContainer(
  ({ items, onEdit, onDelete, onDuplicate, showMenu, setShowMenu, setColors, colors  }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const tabList = ["Color", "Typography", "Shadow"];
    const handelAddColor = ()=>{
        const data = { id: 3, title: 'Title Text', color: '#0000FF' }
        setColors([...colors, data])
    }
    console.log(items);
    return (
      <div className="kzui-system">
        <div className="kzui-heading">Design System</div>
        <hr />
        <div className="kzui-name-value">
          <div className="kzuil-tab-list">
            {tabList.map((tab, idx) => (
              <div key={idx}>
                <button
                  style={{
                    textDecoration: tabIndex === idx ? "underline " : "none",
                    color: tabIndex === idx ? "black" : "",
                    padding: "10px 20px",
                    margin: "5px 5px",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    outline: "none",
                  }}
                  onClick={() => setTabIndex(idx)}
                >
                  {tab}
                </button>
              </div>
            ))}
          </div>
          <div>
            <input className="kzui-search" type="text" placeholder="Search" />
          </div>
        </div>
        <hr />
        <table className="kzui-custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <SortableItem
                key={`item-${item.id}`}
                index={index}
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
                onDuplicate={onDuplicate}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                colors = {colors}
        setColors={setColors}
        items={items}
              />
            ))}
          </tbody>
        </table>
        <div>
            <button 
            style={{ outline: "none",
              border:"none"
             }}
            onClick={handelAddColor}><FiPlus /> Add Color</button>
        </div>
      </div>
    );
  }
);
