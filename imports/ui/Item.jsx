import React from "react";
import { Meteor } from "meteor/meteor";
import classnames from "classnames";
import { Items } from "../api/items.js";
import "./Item.css";

const Item = props => {
  const itemClassName = classnames({
    checked: props.item.checked
  });

  const toggleChecked = () => {
    Meteor.call("items.setChecked", props.item._id, !props.item.checked);
  };

  const onKeyPressChecked = event => {
    if (event.key == "Enter") {
      Meteor.call("items.setChecked", props.item._id, !props.item.checked);
    }
  };

  const deleteThisItem = () => {
    Meteor.call("items.remove", props.item._id);
  };

  return (
    <ul>
      <li className={itemClassName}>
        <div className="row">
          <div className="col-0">
            <input
              className="checkbox"
              type="checkbox"
              readOnly
              checked={!!props.item.checked}
              onClick={toggleChecked}
              onKeyPress={onKeyPressChecked}
            />
          </div>
          <div className="col-3">
            <span className="text">{props.item.text}</span>
          </div>
          <div className="col-6">
            <span className="text"></span>
          </div>
          <div className="col-2">
            <button
              className="delete btn"
              onClick={deleteThisItem}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Item;
