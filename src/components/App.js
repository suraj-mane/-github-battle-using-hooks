import { useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Theam from "../ContextAPI/contextapi";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Battle from "./Battle";
import Popular from "./Popular";
import Result from "./Result";
import Header from "./Header";

let initialState = {
    playerOne:"suraj-mane",
    playerSecound:"abhi3693",
    PlayerOneData:null,
    playerSecoundData:null
}

function reducer(state, action) {
  switch(action.type){
    case "setPlayerOne":
      state.playerOne = action.payload;
      return {...state};
    case "setPlayerSecound":
      state.playerSecound = action.payload;
      return {...state};
    case "setPlayerOneData":
      state.PlayerOneData = action.payload;
      return {...state};
    case "setPlayerSecoundData":
      state.playerSecoundData = action.payload;
      return {...state};
    case "removeOnePlayer":
      state.PlayerOneData = null;
      return {...state};
    case "removeSecoundPlayer":
      state.playerSecoundData = null;
      return {...state};
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDark, setIsDark] = useState(false);

  function handleChange(event) {
    let { name, value } = event.target;
    if(name === "playerOne"){
      dispatch({type:"setPlayerOne", payload:value})
    } else {
      dispatch({type:"setPlayerSecound", payload:value})
    }
  }

  function handleSubmit(event,input) {
    event.preventDefault();
    if(state[input]){
      fetch(`https://api.github.com/users/${state[input]}`)
      .then((res) => res.json())
      .then((data) => {
        if(input !== "playerOne") {
          dispatch({type:"setPlayerSecoundData",payload:data});
        } else {
          dispatch({type:"setPlayerOneData",payload:data});
        }
      });
    }
  }

  function handleRemove(input) {
    if(input === "playerOne") {
      dispatch({type:"removeOnePlayer"});
    } else {
      dispatch({type:"removeSecoundPlayer"});
    }
  }

  return (
    <Theam.Provider value={{isDark,setIsDark}} >
      <ErrorBoundary>
        <div className={isDark ? "bg-gray-800 py-10":"bg-gray-50 py-10"}>
          <div className="w-10/12 mx-auto">
            <Header />
            <Switch>
              <Route path="/" exact>
                <Popular/>
              </Route>
              <Route path="/battle" exact>
                <Battle handleChange={handleChange}  handleSubmit={handleSubmit} state={state} handleRemove={handleRemove}/>
              </Route>
              <Route path="/battle/result" exact>
                <Result state={state}/>
              </Route>
            </Switch>
          </div>
        </div>
      </ErrorBoundary>
    </Theam.Provider>
  );
}


export default App;
