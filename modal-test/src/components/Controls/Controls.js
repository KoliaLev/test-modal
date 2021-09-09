import React, { useContext } from "react";
import { ModalContext } from "../../contexts";

import "./style.css"

export const Controls = () => {
  const { openModal } = useContext(ModalContext)

  const handleClickFirstButton = () => {
    openModal({
      title: "Opened by first button",
    })
  }
  const handleClickSecondButton = () => {
    openModal({
      title: "Opened by second button",
    })
  }
  const handleClickTrirdButton = () => {
    openModal({
      title: "Opened by third button",
    })
  }
  return (
    <div className="controls">
      <button onClick={handleClickFirstButton}>First</button>
      <button onClick={handleClickSecondButton}>Second</button>
      <button onClick={handleClickTrirdButton}>Third</button>
    </div>
  )
}