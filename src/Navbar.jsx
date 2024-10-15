import { useState } from "react";
import "./App.css";

function Navbar() {
  const [activeTab, setActiveTab] = useState("Welcome");

  return (
    <nav className="navbar">
      <ul className="navbar-tabs">
        <li
          className={activeTab === "Welcome" ? "active" : ""}
          onClick={() => setActiveTab("Welcome")}
        >
          <img src="/image/Group.png" alt="" />
        </li>
        <li
          className={activeTab === "Welcome" ? "active" : ""}
          onClick={() => setActiveTab("Welcome")}
        >
          Welcome
        </li>
        <li
          className={activeTab === "Settings" ? "active" : ""}
          onClick={() => setActiveTab("Settings")}
        >
          Settings
        </li>
        <li
          className={activeTab === "Blogs" ? "active" : ""}
          onClick={() => setActiveTab("Blogs")}
        >
          Blogs
        </li>
      </ul>

      {/* <div className="tab-content">
        {activeTab === "Welcome" && <div>Welcome to our platform!</div>}
        {activeTab === "Settings" && <div>Here are your settings options.</div>}
        {activeTab === "Blogs" && <div>Check out our latest blogs.</div>}
      </div> */}
    </nav>
  );
}

export default Navbar;
