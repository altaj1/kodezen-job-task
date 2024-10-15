import { AiOutlineDelete } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { SortableElement } from "react-sortable-hoc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdDragIndicator } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
export const SortableItem = SortableElement(
  ({
    item,
    onEdit,
    onDelete,
    onDuplicate,
    showMenu,
    setShowMenu,
    menuId,
    items,
    colors,
    setColors,
  }) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [editColor, setEditColor] = useState({});
    const [color, setColor] = useColor("rgb(86 30 203)");

    const toggleSidebar = (itm) => {
      setEditColor(itm);
      setIsSidebarOpen(!isSidebarOpen);
    };
    const handelDuplicate = (it) => {
      setColors([...colors, it]);
    };
    const handelUpdate = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const id = item.id;
      const newColor = color.hex;

      const updatedColors = items.map((item) =>
        item.id === id ? { ...item, title, color: newColor } : item
      );
      setColors(updatedColors);
    };
    // console.log(color)
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
                  <BsThreeDots onMouseEnter={() => setHoveredItemId(item.id)} />
                  {hoveredItemId === item.id && (
                    <span
                      className="tooltip"
                      onMouseLeave={() => setHoveredItemId(null)}
                    >
                      <button onClick={() => toggleSidebar(item)}>
                        <FaPencil /> Edit
                      </button>
                      <button onClick={() => handelDuplicate(item)}>
                        <HiOutlineDocumentDuplicate /> Duplicate
                      </button>
                      <button onClick={() => onDelete(item.id)}>
                        <AiOutlineDelete /> Delete
                      </button>
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

                <form action="" onSubmit={handelUpdate}>
                  <label
                    htmlFor=""
                    style={{
                      display: "flex",
                      "flex-direction": "column",
                      textAlign: "start",
                    }}
                  >
                    Name
                    <input
                      name="title"
                      style={{
                        marginTop: "5px",
                        padding: "10px",
                        borderRadius: "6px",
                      }}
                      type="text"
                      defaultValue={editColor.title}
                    />
                  </label>
                  <hr />
                  <div>
                    <label
                      htmlFor=""
                      style={{
                        display: "flex",
                        "flex-direction": "column",
                        textAlign: "start",
                        marginTop: "20px",
                      }}
                    >
                      Value
                    </label>
                    <div>
                      <div
                      style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center"
                    }}
                      >
                        <h3
                          style={{
                            textAlign: "start",
                          }}
                        >
                          Color
                        </h3>
                        <div style={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            gap:"8px"
                        }}>
                         
                            <div
                              style={{
                                height: "16px",
                                width: "16px",
                                backgroundColor: color.hex, // Use the variable directly
                              }}
                            ></div>
                            <div>{color.hex}</div>
                          
                        </div>
                      </div>
                      <ColorPicker color={color} onChange={setColor} />;
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <button onClick={toggleSidebar} className="close-sidebar">
                      Cancel
                    </button>
                    <input
                      type="submit"
                      value={"Save"}
                      style={{
                        "margin-top": "20px",
                        "background-color": "#000000",

                        /* border: none; */
                        color: " white",
                        padding: "12px",
                        paddingRight: "30px",
                        paddingLeft: "30px",
                        cursor: "pointer",
                        borderRadius: "12px",
                      }}
                    />
                  </div>
                </form>
              </div>
              {/* Place your editing form or content here */}
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
