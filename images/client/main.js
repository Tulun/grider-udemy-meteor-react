// Import React library
  import React from 'react';
  import ReactDOM from 'react-dom';

// Create a component
  const App = () => {
    return (
      <div>
        React App #2
      </div>
    );
  };

// Render this component
  Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
  });
