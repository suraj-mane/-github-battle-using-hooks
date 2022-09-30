import { useEffect, useState,useContext } from "react";
import Theam from "../ContextAPI/contextapi";
import Tags from "./Tags";
import Lodder from "./Lodder";

function Popular(){
    let isDark = useContext(Theam);
    const [tag, setTag] = useState("All");
    const [data, SetData] = useState(null);
    
    useEffect(() => {
        dataFetch(tag);
    },[tag])

    // fetch Data 
    function dataFetch(tag) {
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`)
        .then((res) => res.json())
        .then((data) => SetData(data.items));
    }

    // Change a Tag
    function handleChangeTag(tag) {
        setTag(tag);
    }

    return (
        <div className="">
            <div className="w-full flex justify-center">
                <Tags tag={tag} handleChangeTag={handleChangeTag}/>
            </div>
            {
                data !== null ? <div className="mt-10 flex flex-wrap gap-5">
                            {
                                data.map((data,index) => (
                                    <Cart key={index} {...data} index={index} />
                                ))
                            }
                        </div> : <Lodder/>
            }
        </div>
    )
}

function Cart(props) {
    let isDark = useContext(Theam);
    return(
        <div className={isDark.isDark ? "w-60 text-center text-gray-50 bg-gray-700 px-5 py-5" : "w-60  text-center text-gray-900 bg-gray-200 px-5 py-5"}>
            <h1 className="py-5 text-2xl">#{props.index + 1}</h1>
            <img className="w-24 h-24 ml-12" src={props.owner.avatar_url} alt="owner"/>
            <h1 className="text-red-500 py-4 font-semibold text-xl">{props.owner.login}</h1>
            <p className="text-left "><i className="fa-solid fa-user text-orange-200"></i> {props.owner.login}</p>
            <p className="text-left"><i className="fa-solid fa-star text-yellow-300"></i> {props.stargazers_count}</p>
            <p className="text-left"><i className="fa-solid fa-code-fork text-sky-500"></i> {props.forks_count}</p>
            <p className="text-left"><i className="fa-solid fa-triangle-exclamation text-red-500"></i> {props.open_issues_count}</p>
        </div>
    )
}

export default Popular;