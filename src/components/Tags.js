import { useContext } from "react";
import Theam from "../ContextAPI/contextapi";

function Tags(props) {
    let isDark = useContext(Theam);
    return (
        <div className="">
            <ul className={!isDark.isDark ? "flex gap-3 " : "flex gap-3 text-gray-50"}>
                <li className={props.tag === "All" ? "text-red-500 font-semibold" : "text-gray-400 font-semibold"} onClick={() => props.handleChangeTag("All")}>All</li>
                <li className={props.tag === "Java" ? "text-red-500 font-semibold" : "text-gray-400 font-semibold"} onClick={() => props.handleChangeTag("Java")}>Java</li>
                <li className={props.tag === "JavaScript" ? "text-red-500 font-semibold" : "text-gray-400 font-semibold"} onClick={() => props.handleChangeTag("JavaScript")}>JavaScript</li>
                <li className={props.tag === "Ruby" ? "text-red-500 font-semibold" : "text-gray-400 font-semibold"} onClick={() => props.handleChangeTag("Ruby")}>Ruby</li>
                <li className={props.tag === "CSS" ? "text-red-500 font-semibold" : "text-gray-400 font-semibold"} onClick={() => props.handleChangeTag("CSS")}>CSS</li>
                <li className={props.tag === "Python" ? "text-red-500 font-semibold" : "text-gray-400 font-semibold"} onClick={() => props.handleChangeTag("Python")}>Python</li>
            </ul>
        </div>
    )
}

export default Tags;