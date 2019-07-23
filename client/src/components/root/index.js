/* Main purpose: hold the page view as well as the filter component and list component */
import React from 'react';
import "./root.css";

import NG_Text_Banner from "../../assets/NG_Text_Banner_2019.jpg";

/* Component Imports */
import Filter from "../filter/index.js";

class Root extends React.Component {
  state = {
    nGroups: [], /* Neighborhood Groups */
    filteredGroups: [],
  };

  componentDidMount() {
    console.log("Component mounted\n");
  };


  render() {
    return (
      <div className = "home">
        <div className = "home__banner">
          <h1 className = "banner__header">Neighborhood Groups</h1>
        </div>

        <div className = "content">
          <div className = "content__banner">
            <img className = "content__img" src = {NG_Text_Banner} alt = "neighborhood groups 2019 text banner" />
          </div>

          <div className = "content__text">
            <h3 className = "text__header">Find Your Group!</h3>
            <p className = "text__paragraph">Neighborhood Groups are how we do meaningful relationship and there is something for everyone - even you! </p>
            <p className = "text__paragraph">Simply click a day and find out what’s happening in your neighborhood.</p>
            <br />
            <p className = "text__paragraph">All are welcome so why don’t you come join us?</p>
          </div>

          <div className = "content__divider"></div>
        </div>

        <div className = "filter">
          <Filter />
        </div>
      </div>
    );
  };
};

export default Root;