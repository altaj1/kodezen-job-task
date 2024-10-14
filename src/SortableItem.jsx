
import { AiOutlineDelete } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { SortableElement } from "react-sortable-hoc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
export const SortableItem = SortableElement(
  ({ item, onEdit, onDelete, onDuplicate, showMenu, setShowMenu, menuId, colors, setColors }) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [editColor, setEditColor] = useState({})

    const toggleSidebar = (itm) => {
        setEditColor(itm)
      setIsSidebarOpen(!isSidebarOpen);
    };
    const handelDuplicate = (it)=>{
        setColors([...colors, it])
    }
    return (
      <>
        <tr>
          <td>
            <div
              className="kzui-list-item"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <div>
                <p>
                  <span className="kzui-drag">
                    <MdDragIndicator />
                  </span>
                  <span>
                    <IoColorPaletteOutline />
                  </span>
                  <span>{item.title}</span>
                </p>
              </div>
            </div>
          </td>
          <td>
            <div className="kzui-value">
              <div
                className="kzui-list-content"
                style={{ backgroundColor: item.color }}
              ></div>
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span>{item.color}</span>
                <span style={{ position: "relative" }}>
                  <BsThreeDots
                    onMouseEnter={() => setHoveredItemId(item.id)}
                   
                  />
                  {hoveredItemId === item.id && (
                    <span className="tooltip"
                    
                    onMouseLeave={() => setHoveredItemId(null)}
                    >
                      <button onClick={()=>toggleSidebar(item)}><FaPencil /> Edit</button>
                      <button onClick={()=>handelDuplicate(item)}><HiOutlineDocumentDuplicate /> Duplicate</button>
                      <button onClick={() => onDelete(item.id)}><AiOutlineDelete /> Delete</button>
                    </span>
                  )}
                </span>
              </p>
            </div>
          </td>
        </tr>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="sidebar-content">
              
              <div>
              <h2>Edit Color</h2>
              
              <form action="">
                <label htmlFor="" style={{
                    display:"flex",
                    'flex-direction': "column",
                    textAlign:"start"
                }}>
                    Name 
                    <input 
                    style={{
                        marginTop:"5px",
                        padding:"10px",
                        borderRadius:"6px"
                    }}
                    type="text"  defaultValue={editColor.title} />
                </label>
               
              </form>
              </div>
              {/* Place your editing form or content here */}
              <button onClick={toggleSidebar} className="close-sidebar">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Overlay (optional, for a dimmed background) */}
        {isSidebarOpen && (
          <div className="overlay" onClick={toggleSidebar}></div>
        )}
      </>
    );
  }
);
