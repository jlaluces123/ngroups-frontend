import React from 'react';
import "./list.css";

/* Component Imports */
import ListItem from "./listItem.js";

const List = (props) => {
  return (
    <div className="list">
      <ul>
        {props.list.map(group => (
          <ListItem key = {group.name} group = {group} />
          // console.log(group.name)
        ))}
      </ul>
    </div>
  );
}

export default List;