import React from "react";
import "./App.css";

import {
  FaShoppingCart,
  FaSearch,
  FaUserAlt,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="all-background">
        <div className="container w-4/5 h-4/5 rounded-3xl shadow-3xl relative z-10 bg-inherit overflow-hidden flex flex-col font-sans">
          <nav className=" md:flex justify-between px-10 py-5 font-bold">
            <ul className="md:flex text-white">
              <li className="mx-5 flex items-center bg-red-400 p-1 rounded-xl">
                Home
              </li>
              <li className="mx-5 flex items-center">Old models</li>
              <li className="mx-5 flex items-center">New</li>
              <li className="mx-5 flex items-center">About</li>
            </ul>
            <ul className="flex text-white">
              <li className="mx-5 flex items-center">
                <FaShoppingCart />
              </li>
              <li className="mx-5 flex items-center">
                <FaSearch />
              </li>
              <li className="mx-5 flex items-center">
                <FaUserAlt />
              </li>
            </ul>
          </nav>
          <div className="flex font-bold h-full items-center relative">
            <div className="flex text-white flex-col text-2xl w-12 h-full justify-center">
              <FaInstagram className="m-3" />

              <FaFacebook className="m-3" />
              <FaTwitter className="m-3" />
            </div>
            <div className="flex flex-col w-full">
              <div className="sm:flex flex-col text-white text-sm mb-4 md:text-white w-full px-8 mb-24 ">
                <h3 className="m-0">THE BEST OF THE YEAR</h3>
                <h1 className="m-0 text-xl md:text-4xl">IT'S COMING</h1>
              </div>
              <div className="sm: text-white text-sm flex flex-col justify-end mt-0 md:text-white w-full text-right px-8 mt-20 ">
                <h3 className="m-0 ">MAKE SUREYOU DID A PRE-ORDER</h3>
                <h1 className="m-0  text-xl md:text-4xl">NEXT WEEK</h1>
              </div>
            </div>
            <img
              src="https://i.imgur.com/GsBNEtU.png"
              className="animate-move absolute w-1/2 transform translate-y-2/4% translate-x-2/4 -rotate-12 "
            ></img>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
