import React, { Component }from "react";
import Sidebar from "./sidebar";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
    <>
      <Sidebar />
    </>
    );
  }
}
 
export default App;