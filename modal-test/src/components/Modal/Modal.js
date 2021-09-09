import React, { useContext, useState } from "react";
import { ModalContext } from "../../contexts";

import "./style.css"

export const Modal = (props) => {
  const { title, children } = props
  const { closeModal } = useContext(ModalContext)

  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true)
    closeModal()
  }

  const backDropClasses = closing ? "backdrob backdrop-hide" : "backdrop"

  return (
    <div className={backDropClasses} onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header"><h3>{title}</h3></div>
        <div className="modal__body"> {children}</div>
      </div>
    </div>
  )
}