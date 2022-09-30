import { useEffect, useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import Theam from "../ContextAPI/contextapi";

function Result(props) {
    let [scoreOne, setScoreOne] = useState(0);
    let [scoreTwo, setScoreTwo] = useState(0);

    let isDark = useContext(Theam);
    let { playerSecoundData, PlayerOneData } = props.state;

    useEffect(() => {
        setScoreOne(PlayerOneData.followers * 20 + PlayerOneData.public_repos);
        setScoreTwo(playerSecoundData.followers * 20 + playerSecoundData.public_repos);
    },[])

    return (
        <div className="text-center">
            <div className="flex gap-10 justify-center mt-10">
                <div className={isDark.isDark ? "bg-gray-700 w-80 text-gray-50 text-center py-5" : "bg-gray-300 w-80 text-gray-800 text-center py-5"}>
                    <h1 className="text-2xl">{scoreTwo < scoreOne
                        ? 'Winner'
                        : scoreTwo > scoreOne
                        ? 'Loser'
                        : scoreTwo === scoreOne
                        ? 'Tie'
                        : ''}
                    </h1>
                    <img className="w-32 h-32 mx-auto py-4" src={PlayerOneData.avatar_url} alt="user"/>
                    <h2>Score: {scoreOne}</h2>
                    <h1 className="text-center text-2xl">{PlayerOneData.login}</h1>
                    <p className="text-left ml-4 text-lg ">  <i className="fa-solid fa-user text-orange-200"></i>  {PlayerOneData.name}</p>
                    <p className="text-left ml-4 text-lg">  <i className="fa-solid fa-compass text-indigo-500"></i>  {PlayerOneData.location}</p>
                    <p className="text-left ml-4 text-lg">  <i className="fa-solid fa-users text-sky-400"></i>  {PlayerOneData.followers}</p>
                    <p className="text-left ml-4 text-lg">  <i className="fa-solid fa-user-group text-green-400"></i>  {PlayerOneData.following}</p>
                    <p className="text-left ml-4 text-lg">  <i className="fa-solid fa-code text-gray-600"></i>  {PlayerOneData.public_repos}</p>
                </div>
                <div className={isDark.isDark ? "bg-gray-700 w-80 text-gray-50 text-center py-5" : "bg-gray-300 w-80 text-gray-800 text-center py-5"}>
                    <h1 className="text-2xl">{scoreTwo > scoreOne
                        ? 'Winner'
                        : scoreTwo < scoreOne
                        ? 'Loser'
                        : scoreTwo === scoreOne
                        ? 'Tie'
                        : ''}</h1>
                    <img className="w-32 h-32 mx-auto py-4" src={playerSecoundData.avatar_url} alt=""/>
                    <h2>Score: {scoreTwo}</h2>
                    <h1 className="text-2xl">{playerSecoundData.login}</h1>
                    <p className="text-left ml-4 text-lg"><i className="fa-solid fa-user text-orange-200"></i>  {playerSecoundData.name}</p>
                    <p className="text-left ml-4 text-lg"><i className="fa-solid fa-compass text-indigo-500"></i>  {playerSecoundData.location}</p>
                    <p className="text-left ml-4 text-lg"><i className="fa-solid fa-users text-sky-400"></i>  {playerSecoundData.followers}</p>
                    <p className="text-left ml-4 text-lg"><i className="fa-solid fa-user-group text-green-400"></i>  {playerSecoundData.following}</p>
                    <p className="text-left ml-4 text-lg"><i className="fa-solid fa-code text-gray-600"></i>  {playerSecoundData.public_repos}</p>
                </div>
            </div>
            <button className="bg-gray-900 text-gray-50 rounded p-2 mt-10"><NavLink to="/battle">R E S E T</NavLink></button>
        </div>  
    )
}

export default Result;