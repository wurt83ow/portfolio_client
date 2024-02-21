// Header.js
import React from "react";
import Menu from "../menu/menu.js";
import LangSwitch from "../langSwitch/langSwitch.js";

function Header({ menuItems }) {
  return (
    <div className="header">
      <Menu items={menuItems} />
      <div className="subheader">
        <div className="container">
          {/* Разметка для остальной части шапки */}
          <div className="row">
            <div className="col">
              <div className="menu_btn">
                <button data-modal-menu>
                  <img src="icons/menu.png" alt="menu" />
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="target_name">
                <p>Andrei</p>
                <p>Tokarev</p>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <div className="target_info">
                <p>golang developer</p>
                <p>from Moscow</p>
              </div>
            </div>
            <div className="col-md-4 lang_box">{<LangSwitch />}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="target_photo">
                {/* <img src="media/targetPhoto.png" alt="photo" /> */}
              </div>
            </div>
          </div>
          {/* Здесь можно добавить любые другие элементы шапки */}
        </div>
      </div>
    </div>
  );
}

export default Header;
