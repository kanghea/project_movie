import React from "react";

function Food(props) {
  return <h1>hello world { props.fav}</h1>
}

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <food fav="kimchi" />
    </div>
  );
}

export default App;
