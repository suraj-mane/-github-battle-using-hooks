import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Theam from "../ContextAPI/contextapi";

function Header(props) {
    let isDark = useContext(Theam);
    return (
        <div className={isDark.isDark ? "flex justify-between" : "flex justify-between"}>
            <ul className="flex gap-2">
                <li className={!isDark.isDark ? "text-gray-900 font-semibold" : "text-gray-50 font-semibold"}><NavLink  to="/" exact activeClassName="text-red-500 font-semibold" >Popular</NavLink></li>
                <li className={!isDark.isDark ? "text-gray-900 font-semibold" : "text-gray-50 font-semibold"}><NavLink  activeClassName="text-red-500 font-semibold"  to="/battle">Battle</NavLink></li>
            </ul>
            <p onClick={() => isDark.setIsDark(!isDark.isDark)}>{isDark.isDark ? "💡":"🔦"}</p>
        </div>
    )
}

export default Header;
