import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./containers/About";
import Landing from "./containers/Landing";
import Booking from "./containers/Booking";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;