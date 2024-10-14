const Sidebar = ({ item, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <h3>dafsdfasdfa</h3>
          <p>Title: {item.title}</p>
          <p>Color: {item.color}</p>
          {/* Add form inputs to edit the item */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
export default Sidebar  