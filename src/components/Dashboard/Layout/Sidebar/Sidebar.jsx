import { useState } from "react";
import "./Sidebar.css";
import { menuItems } from "./sidebarData";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (label) => {
    setOpenMenu((current) => (current === label ? null : label));
  };
  return (
    <>
      <aside className="S-K-Dashboard-Sidebar">
        <div className="S-K-Dashboard-Sidebar-Logo">
          <img src="/assets/img/Logo/logoNavBar.webp" alt="YourBank" />
        </div>
        <nav className="S-K-Dashboard-Sidebar-Nav">
          <p className="S-K-Dashboard-Sidebar-Title">MENU</p>
          <div className="S-K-Dashboard-Sidebar-Menu">
            {menuItems.map((item) => {
              const isOpen = openMenu === item.label;

              return (
                <div className="S-K-Dashboard-Sidebar-group" key={item.label}>
                  <button
                    type="button"
                    className={`S-K-Dashboard-Sidebar-item ${isOpen ? "open" : ""}`}
                    onClick={() => toggleMenu(item.label)}
                  >
                    <span className="S-K-Dashboard-Sidebar-icon">
                      {item.icon}
                    </span>

                    <span className="S-K-Dashboard-Sidebar-label">
                      {item.label}
                    </span>
                    <span className="S-K-Dashboard-Sidebar-arrow">
                      {isOpen ? (
                       <RiArrowDownSLine />

                      ) : (
                       <RiArrowRightSLine />

                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="S-K-Dashboard-Sidebar-submenu">
                      {item.sections.map((section) => (
                        <button
                          type="button"
                          className="S-K-Dashboard-Sidebar-subitem"
                          key={section}
                        >
                          {section}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
