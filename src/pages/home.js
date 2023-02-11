import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  state = {
  }

  componentDidMount() {

  }


  render() {

    return (
      <div className="flex bg-red-100	">
        <div className="flex-none w-14 h-14">
          <Link to="/home">Home</Link>
        </div>
        <div className="grow h-14">
          <Link to="/login">login</Link>
        </div>
        <div>
          <Link to="/member">member center</Link>
        </div>
        <div className="flex-none w-14 h-14">
          <Link to="/orders">orders</Link>
        </div>
      </div>
    );
  }
}

export default Home;