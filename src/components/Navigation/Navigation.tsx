import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {

 return (
    <div>
        <nav>
            <ul> 
                <li><NavLink to={"/unit"}>Unit</NavLink></li>
                <li><NavLink to={"/login"}>Login</NavLink></li>
                <li><NavLink to={"/coocies"}>Coocies</NavLink></li>
            </ul>
        </nav>

    </div>
  );
}

export default Navigation;




// function Navigation() {
//   return (
//     <div className="App">
//             <NavLink to={"/unit"}>Unit</NavLink>
//             <NavLink to={"/login"}>Login</NavLink>
//             <NavLink to={"/coocies"}>Coocies</NavLink>
//     </div>
//   );
// }

// export default Navigation;
