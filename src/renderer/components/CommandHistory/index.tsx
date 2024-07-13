import { useEffect, useState } from "react";
import { HistoryItem } from "../HistoryItem";
import { IconOutlineSearch } from "../Icons/IconOutlineSearch";
import { useCommandHistory } from "../../contexts/CommandHistoryContext";
import { motion } from "framer-motion";
import "./style.css"

import SEARCH_UNDERLINE_PATH from "../../assets/img/searchbar-underline.svg"

export const CommandHistory = () => {
  const [historyItemsShowed, setHistoryItemsShowed] = useState<{ command: string, status: number }[]>([]);
  const { historyItems } = useCommandHistory();

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
        <div className="history-background" />
        <div className="searchbar">
          <IconOutlineSearch className="icon-outline-search-instance" />
          <input className="text-wrapper-5" placeholder="Search Command" onChange={handleChange} />
          <img className="searchbar-underline" alt="Searchbar underline" src={SEARCH_UNDERLINE_PATH} />
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
