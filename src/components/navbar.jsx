import React, { Component } from "react";

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-dark">
//         <a className="navbar-brand text-white" href="#">
//           Counter App
//         </a>
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// Stateless functional component
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand text-white" href="#">
        Counter App
      </a>

      <span className="badge badge-pill badge-secondary ml-auto p-3">
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default Navbar;
