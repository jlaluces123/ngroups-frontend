/* Main purpose: hold the page view as well as the filter component and list component */
import React from 'react';
import "./root.css";

import NG_Text_Banner from "../../assets/NG_Text_Banner_2019.jpg";

/* Component Imports */
import Filter from "../filter/index.js";
import List from "../list/index.js";


/*
  Props for {Root}:
    1. handleSubmit()
      - This will make the fetch call to the backend API based on the given options
    2. categoryValue = ?
      -  From {Root's} state, this will determine if a category has been selected and switch promptly
    3. daysValue = ?
      - Same thing as #2 but will determine if a specific day has been selected
    4. handleChange()
      - handleChange will set the value in {Root's} state to the event.target.value of each category
*/

class Root extends React.Component {
  state = {
    nGroups: [], /* Neighborhood Groups */
    filteredGroups: [],
    categoryValue: "all-categories",
    daysValue: "all-days",
  };

  componentDidMount() {
    fetch(`http://dev-env.9mbsdkkmn3.us-west-2.elasticbeanstalk.com/api/ngroup/`)
      .then(res => res.json())
      .then(result => {
        this.setState({ nGroups: result.results });
        console.log(this.state.nGroups);
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.categoryValue !== prevState.categoryValue || this.state.daysValue !== prevState.daysValue) {
      // console.log("days value comparison: \n", this.state.daysValue, prevState.daysValue);
      // console.log("category value comparison: \n", this.state.categoryValue, prevState.categoryValue);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("handle submit");
    if (this.state.categoryValue === "all-categories" && this.state.daysValue === "all-days") {
      console.log("default handle submit");
    } else {
      // This is a category filter (work in progress)
      // const result = this.state.nGroups.filter(group => console.log(group.categories[0] === this.state.categoryValue))

      // This is for a day-filter (work in progress)
      // const result = this.state.nGroups.filter(group => console.log(group.day_of_week.toLowerCase() === this.state.daysValue));
      // return result;
    }
  };

  handleDayChange = e => {
    console.log("handle DAY change");
    // console.log("e.target.value is: \n", e.target.value);
    this.setState({ daysValue: e.target.value });

  };

  handleCategoryChange = e => {
    console.log("handle CATEGORY change");
    // console.log("e.target.value is: \n", e.target.value);
    this.setState({ categoryValue: e.target.value });
    console.log(e.target.name, e.target.value);
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

        <div className = "menus">
          <Filter
            handleSubmit = {this.handleSubmit}
            categoryValue = {this.state.categoryValue}
            daysValue = {this.state.daysValue}
            handleDayChange = {this.handleDayChange}
            handleCategoryChange = {this.handleCategoryChange}
          />
        </div>

        <div className="results">
          <List list = {this.state.nGroups} />
        </div>
      </div>
    );
  };
};

export default Root;