import React, { useState } from "react";
import "./ModalMenu.scss";

function ModalMenu({ items, triggerText, language }) {
  console.log("333333333333333333", items);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "visible" : "hidden";
  };

  return (
    <>
      <button
        data-modal-menu="true"
        onClick={toggleModal}
        className={isOpen ? "active" : ""}
      >
        {triggerText}
      </button>
      {isOpen && (
        <div className="modal_menu" onClick={toggleModal}>
          <div className="modal_menu__dialog">
            <div className="modal_menu__content">
              <div
                data-menu-close
                className="modal_menu__close"
                onClick={toggleModal}
              >
                ×
              </div>
              {items.map((item, index) => (
                <div key={index} className="modal_menu__input">
                  <a
                    href={item.link}
                    className={`menu_link ${item.isActive ? "active" : ""}`}
                  >
                    {language === "ru" ? item.title.ru : item.title.en}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalMenu;
