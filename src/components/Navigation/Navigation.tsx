import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'
import { slugify } from '../../utils/helper';
import { motion } from "framer-motion";

type SideNavigationItem = {
    name: string;
    to: string;
    mobileOnly?:boolean
  };

const mainNavItems = [
    {name: 'Home', to: '/', mobileOnly: true },
    // { name: 'About', to: './about' },
    // { name: 'Blog', to: './blog' },
    // { name: 'Timeline', to: './twitter' },
    // { name: 'Links', to: './resume' },
  ] as SideNavigationItem[];

export const Navigation = () => {
    return (
      <section className="navigation">
        <div className="container">
          <div className="nav-wrapper">
            <NavLink to="/" className="item brand">
              <motion.div className="logo"
              animate={{
                scale: [1, 1.3, 1.3, 1.3, 1],
                rotate: [0, 180, 180, 180, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              >
                😎
              </motion.div>
              <motion.div
                whileHover={{ scale:0.9 }}
                transition = {{
                  duration:0.2,
                  scale:{
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
              <span>Ritik Rana</span>
              </motion.div>
            </NavLink>
            <nav>
              {mainNavItems.map((item) => (
                <div className= {item.mobileOnly ?"nav-item-outer mobile-only" :"nav-item-outer"} key={item.to}>
                  <NavLink
                    to={item.to}
                    key={item.name}
                    className={`item ${slugify(item.name)}`}
                  >
                     <motion.span whileHover={{ scale: 1.3 }} >
                        {item.name}  
                     </motion.span>
                  </NavLink>
                </div>
              ))}
            </nav>
          </div>
          <div className="theme-toggle">
            {/* <button onClick={onUpdateTheme}>
              <img src={moon} alt="Theme" />
            </button> */}
          </div>
        </div>
      </section>
    )
  }