import React from 'react';
import "./filter.css";

/*
  Props to be passed down to root:
    1. handleSubmit()
      - This will make the fetch call to the backend API based on the given options
    2. categoryValue = ?
      -  From {Root's} state, this will determine if a category has been selected and switch promptly
    3. daysValue = ?
      - Same thing as #2 but will determine if a specific day has been selected
    4. handleChange()
      - handleChange will set the value in {Root's} state to the event.target.value of each category
*/

const Filter = (props) => {
  return (
    <div className="filter">
      <form className = "form" onSubmit = {props.handleSubmit}>

        {/* Handle a category if selected */}
        <select className = "select" id = "categories" value = {props.categoryValue} onChange = {props.handleCategoryChange}>
          <option value = "all-categories">All Categories</option> {/* On by default */}
          <option value = "SONS">SONS</option>
          <option value = "Sports">Sports</option>
        </select>

        {/* Handle a day if selected */}
        <select className = "select" id = "days" value = {props.daysValue} onChange = {props.handleDayChange}>
          <option value = "all-days">All Days</option> {/* On by default */}
          <option value = "monday">Monday</option>
          <option value = "tuesday">Tuesday</option>
          <option value = "wednesday">Wednesday</option>
          <option value = "thursday">Thursday</option>
          <option value = "friday">Friday</option>
          <option value = "saturday">Saturday</option>
        </select>

        <input type = "submit" value = "Submit" />
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
      </form>
    </div>
  );
}

export default Filter;