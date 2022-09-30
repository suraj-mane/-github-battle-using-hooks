import { NavLink } from "react-router-dom";
import Theam from "../ContextAPI/contextapi";
import { useContext } from "react";

function Battle(props) {
    let { playerSecoundData, PlayerOneData } = props.state;
    let isDark = useContext(Theam);
    return (
        <div className={isDark.isDark ? "text-center mt-10 text-gray-50" : "text-center mt-10 text-gray-900"}>
            <h1 className="text-4xl">Instructions</h1>
            <div className="flex justify-center content-center gap-4 mt-10">
                <div>
                    <h1 className="text-2xl">Enter two Github users</h1>
                    <div className="w-80 bg-gray-300 py-10 mt-5">
                        <i className="fa-solid fa-user-group text-8xl text-orange-200"></i>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl">Battle</h1>
                    <div className="w-80 bg-gray-300 py-10 mt-5">
                        <i className={isDark.isDark ? "fa-solid fa-jet-fighter text-8xl": "fa-solid fa-jet-fighter text-8xl"}></i>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl">See the winner</h1>
                    <div className="w-80 bg-gray-300 py-10 mt-5">
                        <i className="fa-solid fa-trophy text-8xl text-yellow-500"></i>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl">Players</h1>
                <div className="flex my-10">
                    <div className="w-2/4"> 
                           {
                             PlayerOneData !== null ? 
                                <div className="bg-gray-300 flex w-3/4 p-2 ml-20">
                                  <img className="w-10 h-10 rounded" src={PlayerOneData.avatar_url} alt="player" />
                                  <h2 className="ml-5 text-xl mt-1">{PlayerOneData.login}</h2>
                                  <p className="ml-36 mt-2" onClick={() => props.handleRemove("playerOne")}>❌</p>
                                </div> :
                                <form className="text-left" onSubmit={(event) => props.handleSubmit(event,"playerOne")}>
                                    <h5>Player One</h5>
                                    <input className="border-2 pl-2 rounded w-3/4" type="text" name="playerOne" placeholder="github username" onChange={ props.handleChange } />
                                    <button className="ml-2 bg-gray-300 py-1 px-2 text-gray-400 rounded">S U B M I T</button>
                                </form>
                           }
                    </div>
                    <div className="w-2/4">
                           {
                             playerSecoundData !== null ? 
                                <div className="bg-gray-300 flex w-3/4 p-2">
                                    <img className="w-10 h-10 rounded" src={playerSecoundData.avatar_url} alt="player" />
                                    <h2 className="ml-5 text-xl mt-1">{playerSecoundData.login}</h2>
                                    <p className="ml-36 mt-2" onClick={() => props.handleRemove("player")}>❌</p>
                                </div> :
                                <form className="text-left" onSubmit={(event) => props.handleSubmit(event,"playerSecound")}>
                                    <h5>Player Secound</h5>
                                    <input className="border-2 pl-2 rounded w-3/4" type="text" name="playerSecound" placeholder="github username" onChange={ props.handleChange }/>
                                    <button className="ml-2 bg-gray-300 py-1 px-2 text-gray-400 rounded" type="submit">S U B M I T</button>
                                </form>
                           }
                    </div>
                </div>
                    <div className="my-10">
                        {
                            playerSecoundData && PlayerOneData ? <button className="bg-gray-900 text-gray-50 rounded p-2"><NavLink exact to="/battle/result">B A T T L E</NavLink></button> : ""
                        }
                    </div>
            </div>
        </div>
    )
}

export default Battle;