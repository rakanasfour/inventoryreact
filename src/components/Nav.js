import {Link} from "react-router-dom";
function Nav(){


    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/displayinfo">Displayinfo</Link>
            <Link to="/About">About</Link>
          
            
        </div>

    );
}
export default Nav;