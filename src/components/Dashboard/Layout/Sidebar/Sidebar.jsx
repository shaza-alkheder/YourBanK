import { useState } from "react";
import "./Sidebar.css";
import { menuItems ,bottomMenuItems} from "./sidebarData";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GiFastBackwardButton } from "react-icons/gi";
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
                     <NavLink
                          to={section.path}
                          className={({ isActive }) =>
                            `S-K-Dashboard-Sidebar-subitem ${isActive ? "active" : ""}`
                          }
                          key={section.path}
                        >

                          
                          {section.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
     
<div className="S-K-Dashboard-Sidebar-bottom">
  <div className="S-K-Dashboard-Sidebar-Menu">
    {bottomMenuItems.map((item) => (
      <NavLink
        to={item.path}
        className="S-K-Dashboard-Sidebar-home"
        key={item.label}
      >
        <span className="S-K-Dashboard-Sidebar-icon">
          {item.icon}
        </span>

        <span className="S-K-Dashboard-Sidebar-label">
          {item.label}
        </span>
      </NavLink>
    ))}
  </div>
</div>
      </aside>
    </>
  );
};

export default Sidebar;
