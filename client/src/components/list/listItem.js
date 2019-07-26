import React from 'react';

const ListItem = (group) => {
  return (
    <li className = "list__item">
      <div className="info">
        <div className="info__img push-right">
          {/* Img here */}
          <img className = "group__img" src={group.group.image} alt="group profile"/>
        </div>
        <div className="info__date push-right">
          {/* Date info here */}
          <h3>{group.group.day_of_week}</h3>
          <h4>{group.group.start_time} - {group.group.end_time}</h4>
        </div>

        <div className="info__name">
          {/* name and description here */}
          <h3>{group.group.name}</h3>
          <h4>{group.group.description}</h4>
          {/* {console.log(group.group.name)} */}
        </div>
      </div>

      <div className="more__info">
        <a className = "more__btn" href="/">More Details</a>
      </div>
    </li>
  );
}

export default ListItem;