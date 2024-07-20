import { useEffect, useState } from "react";
import { HistoryItem } from "../HistoryItem";
import { IconOutlineSearch } from "../Icons/IconOutlineSearch";
import { useCommandHistory } from "../../contexts/CommandHistoryContext";
import { motion } from "framer-motion";
import "./style.css"

import SEARCH_UNDERLINE_PATH from "../../assets/img/searchbar-underline.svg"
import { useThemeContext } from "../../contexts/ThemeContext";

export const CommandHistory = () => {
  const [historyItemsShowed, setHistoryItemsShowed] = useState<{ command: string, status: number }[]>([]);
  const { historyItems } = useCommandHistory();
  const { theme } = useThemeContext()

  useEffect(() => {
    setHistoryItemsShowed(historyItems);
  }, [historyItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setHistoryItemsShowed(historyItems);
      return;
    }

    setHistoryItemsShowed(historyItemsShowed.filter(({ command, status }) =>
      command.includes(e.target.value) || status.toString().includes(e.target.value)));
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25
      }
    })
  };

  return (
    <div className="command-history">
      <div className="overlap-5">
        <div className={`history-background ${theme === "light" ? "light-el" : "dark-el"}`} />
        <div className="searchbar">
          <IconOutlineSearch className="icon-outline-search-instance" />
          <input className={`text-wrapper-5 ${theme === "light" ? "dark" : "light"}`} placeholder="Search Command" onChange={handleChange} />
          <svg width="258" className="searchbar-underline" height="3" viewBox="0 0 258 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line 
              y1="-0.5" 
              x1="-50.0"
              x2="357.337" 
              y2="-0.5" 
              transform="matrix(0.999986 -0.00531598 0.00549618 0.999985 0.000244141 2.8427)" 
              stroke={theme === "light" ? "#000" : "#fff"}
            />
          </svg>
        </div>
      </div>
      <div className="history-items">
        {historyItemsShowed.map(({ command, status }, index) => (
          <motion.div
            key={command + status}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <HistoryItem command={command} status={status} />
          </motion.div>
        ))}
        {historyItems.length === 0 && (
          <motion.div className="no-history">
            There is no command in history
          </motion.div>
        )}
        {historyItemsShowed.length === 0 && historyItems.length !== 0 && (
          <motion.div className="no-history">
            There is no command in history that fits this description
          </motion.div>
        )}
      </div>
    </div>
  );
};
