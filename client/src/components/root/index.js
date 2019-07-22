/* Main purpose: hold the page view as well as the filter component and list component */
import React from 'react';

/* Component Imports */

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
      <div className="home">
        <h3>root</h3>
      </div>
    );
  };
};

export default Root;