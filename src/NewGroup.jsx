import { SortableContainer } from "react-sortable-hoc";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
export const NewGroup = SortableContainer(
  ({
    index,
    closeModal,
    openModal,
    handelNewGroup,
    handelDeleteGroup,
    items,
    onEdit,
    onDelete,
    onDuplicate,
    showMenu,
    setShowMenu,
    setColors,
    colors,
    isModalOpen
  }) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [newName, setNewName] = useState("New Group");
    const handelAddColor = () => {
      const data = { id: 3, title: "Title Text", color: "#0000FF" };
      setColors([...colors, data]);
    };

    const handleRename = () => {
      closeModal();
    };
    console.log(items);
    return (
      <div>
        <button
          style={{
            outline: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={handelNewGroup}
        >
          {newName}
        </button>
        <span style={{ position: "relative" }}>
          <BsThreeDots onMouseEnter={() => setHoveredItemId(index)} />
          {hoveredItemId === index && (
            <span
              className="tooltip"
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <button onClick={openModal}>
                <FaPencil /> Rename
              </button>
              {/* modal */}
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-content">
                   <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center"
                  
                   }}> <h2>Rename Group</h2>
                   <button style={{
                      fontSize:"28px"
                   }}
                   onClick={closeModal}
                   ><TiDeleteOutline /></button>
                   </div>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Enter new name"
                      style={{
                        padding:"10px"
                      }}
                    />
                    <button onClick={handleRename}>Rename</button>
                    <button onClick={closeModal}>Cancel</button>
                  </div>
                </div>
              )}
              <button onClick={handelNewGroup}>
                <HiOutlineDocumentDuplicate /> Duplicate Group
              </button>
              <button onClick={() => handelDeleteGroup(index)}>
                <AiOutlineDelete /> Delete Group
              </button>
            </span>
          )}
        </span>

        {/* --------------------------------------- */}
        <div className="kzui-system">
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
                  colors={colors}
                  setColors={setColors}
                  items={items}
                />
              ))}
            </tbody>
          </table>
          <div>
            <button
              style={{ outline: "none", border: "none" }}
              onClick={handelAddColor}
            >
              <FiPlus /> Add Color
            </button>
          </div>
        </div>
      </div>
    );
  }
);
