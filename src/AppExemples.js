function App() {
  const myName = "Djalma Feitosa";
  const multiply = (a, b) => a * b;
  const specialClass = "specialClass";
  // Example #1
  const number = [1, 2, 3, 4, 5];
  
  // Example #2-------------------------------------------------------------------------------------------
  const userInfo = [
    {
      username: "user1",
      email: "user1@example.com",
      location: "UK1",
    },
    {
      username: "user2",
      email: "user2@example.com",
      location: "UK2",
    },
    {
      username: "user3",
      email: "user3@example.com",
      location: "UK3",
    },
  ];

  return (
    <>
      <h1>{myName}</h1>
      <p>2 + 2 = {2 + 2}</p>
      <p>My Friends List: {["Alex", "Jordan", "John"]}</p>
      <p>4 * 4 = {multiply(4, 4)}</p>
      <p className={specialClass}>This is a special class</p>

      {number.map((number) => (
        <ul key={Math.random() * 10}>
          <li>{number}</li>
        </ul>
      ))}

      {userInfo.map(user =>(
        <ul key={Math.random() * 10}>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.location}</li>
        </ul>
      ))
      }
    </>
  );
}

//Example 3-------------------------------------------------------------------------------------------
import User from "./components/User";

function App() {
  return (
    <>
      <User
        img="https://avatars.githubusercontent.com/u/85052811?v=4"
        name="Djalma Feiosa"
        age={18}
        hobbies={["Coding", "Readings", "Sleeping"]}
        realData={{ name: "Djalma Feiosa", location: "BR" }}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Preferendis
          tempore molestiae laboriosan ea veniam facere magni obcaecati
          consequuntur laborum iure
        </p>
      </User>
    </>
  );
}
//Example 4-------------------------------------------------------------------------------------------
const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({isValid}) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InvalidPassword />;

  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

function App() {
  return (
    <>
      <Password isValid={false} />
    </>
  );
}

//example 5-------------------------------------------------------------------------------------------
const Cart = () => {
  const items = ["Wireless Eardbuds", "Power Bank", "New SSD", "Hoodies"];

  return (
    <>
      <h1>Cart 🛒 </h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
      <ul>
        <h4>👇 Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  );
};
function App() {
  return (
    <>
      <Cart />
    </>
  );
}

//example 6-------------------------------------------------------------------------------------------
import { BsFillCartCheckFill, BsGithub } from "react-icons/bs";
function App() {
  return (
    <>
      <BsFillCartCheckFill />
      <BsGithub/>
    </>
  );
}

//example 7-------------------------------------------------------------------------------------------

const Button = () => {
  const handleClick = (a, b) => {
    alert(a + b);
  }

  // return <button onClick={handleClick}>Click</button>
  return <button onClick={() => handleClick(1,2)}>Click</button>
}

function App() {
  return (
    <>
    <Button/>
    </>
  );
}

//example 8-------------------------------------------------------------------------------------------
const Copy = () => {
  const copyHandler = () => {
    alert('Stop Stealing My Context');
  }


  return (
    <>
      <p onCopy={copyHandler}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Preferendis
        tempore molestiae laboriosan ea veniam facere magni obcaecati
        consequuntur laborum iure
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <Copy />
    </>
  );
}

//example 9
const Move = () => {
  const moveHandler = () => {
    console.log("You haverd me...");
    
  };

  return (
    <>
      <p onMouseMove={moveHandler}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Preferendis
        tempore molestiae laboriosan ea veniam facere magni obcaecati
        consequuntur laborum iure
      </p>
    </>
  );
};

//example 10-------------------------------------------------------------------------------------------
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="text-4xl bg-stone-300">{count}</h1>
      <br/>
      <button onClick={increment} className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 ml-2 mt-2">
        +
      </button>
      <button onClick={decrement} className="text-white bg-green-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2">
        -
      </button>

    </>
  );
};

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

//examplle 11-------------------------------------------------------------------------------------------
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(["Alex", "John"]);

  const addOne = () => {
    setFriends([...friends, "Djalma Feitosa"]);
  };
  const removeOne = () => {
    setFriends(friends.filter((f) => f !== "John"));
  };
  const updateOne = () => {
    setFriends(
      friends.map((f) =>
        f === "Djalma Feitosa" ? "Djalma Almeida Feitosa" : f
      )
    );
  };

  return (
    <>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button
        onClick={addOne}
        type="button"
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Add One
      </button>
      <button
        onClick={removeOne}
        type="button"
        className="text-white bg-red-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Remove One
      </button>
      <button
        onClick={updateOne}
        type="button"
        className="text-white bg-gray-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Update One
      </button>
    </>
  );
}


function App() {
  return (
    <>
      <Move />
    </>
  );
}

//example 12-------------------------------------------------------------------------------------------
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7
  });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5
    // }

    // setMovie(copyMovie);

    setMovie({...movie, ratings: 5});

  };

  return (
    <>
    <h1 className="text-5xl">{movie.title}</h1>
    <br/>
    <p>Ratings: {movie.ratings}</p>
    <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Change Rating
      </button>    
    </>
  );
}

//example 13-------------------------------------------------------------------------------------------
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 3 },
    { id: 2, title: "Superman", ratings: 3 },
    { id: 3, title: "Thor", ratings: 3 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 4" } : m))
    );
  };
//self-center text-9xl font-semibold whitespace-nowrap
  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()} className="text-3xl font-semibold">{movie.title}</li>
      ))}
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Change Name
      </button>
    </>
  );
}

//example 14-------------------------------------------------------------------------------------------
import { useState } from "react";

function App() {

const [userName, setUserName] = useState("")

const handleChange =(event) => {
  setUserName(event.target.value);
}
const handleSubmit =(event) => {
  event.preventDefault();
  alert(`You typed: ${userName}`);
  setUserName("");
}


  return (
    <>
    <h1>Form Demo</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={userName} onChange={handleChange}/>
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Submit
      </button>
    </form>
    </>
  );
}

//example 15-------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  //1. Render for the first time
  //2. Any time we do (side effect)
  //3. Dependency list

  // useEffect(() => {
  //   if (value > 0) {
  //     console.log("Hello");
  //     document.title = `Increment (${value})`;
  //   }
  // });

  useEffect(() => {
    if (value > 0) {
      console.log("Hello");
      document.title = `Increment (${value})`;
    }
  }, [value]);

  return (
    <>
      <h1>{value}</h1>

      <button
        type="button"
        onClick={() => setValue(value + 1)}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Click me
      </button>
    </>
  );
}

//example 16-------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
      else alert(data);
    }
    getData();
  }, []);

  return <>
  <ul>
    {data.map((item) => (
      <li key={Math.random()}>{item.title}</li>
    ))}
  </ul>
  
  
  </>;
}

//example 17-------------------------------------------------------------------------------------------

import ComponentA from './components/ComponentA';
function App() {
  const name = "Djalma Feitosa";
  return (
    <>
      <ComponentA name={name} />
    </>
  );
}

import ComponentB from "./ComponentB";

const ComponentA = ({ name }) => {
  return (
    <>
      <ComponentB name={name} />
    </>
  );
};

export default ComponentA;

import ComponentC from "./ComponentC";

const ComponentB = ({ name }) => {
  return (
    <>
      <ComponentC name={name} />
    </>
  );
};

export default ComponentB;

const ComponentC = ({name}) => {
  return (
    <div>This data is coming from ComponentA: {name}</div>
  )
}

export default ComponentC;

//example 18-------------------------------------------------------------------------------------------
//1. Import createContext
import { createContext } from "react";
import ComponentC from "./components/ComponentC";

//2. Creating instance of creatContext
export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Djalma Feitosa";
  const age = 57;

  return (
    //3. Wrap our component into Provider Component
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}

import { Data, Data1 } from "../App";

const ComponentC = () => {
  return (
    <>
      <Data.Consumer>
        {(name) => {
          //return <h1>My name is: {name}</h1>;
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is: {name} & I'm {age} years old
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </>
  );
};


//example 19-------------------------------------------------------------------------------------------
//1. Import createContext
import { createContext } from "react";
import ComponentC from "./components/ComponentC";

export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Djalma Feitosa";
  const age = 57;

  return (
    //3. Wrap our component into Provider Component
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentC />
        </Data1.Provider>
      </Data.Provider>
    </>
  );
}
import { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <h1>
        My name is: {name} & I'm {age} years old
      </h1>
    </>
  );
};

//example 20-------------------------------------------------------------------------------------------

import { useReducer } from "react";

// state:
// dispatch: [value, setValue]

// reducer: custom state logic
// initialState: {}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 className="text-4xl">{state.count}</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment" })}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement" })}
        className="text-white bg-red-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        -
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}
        className="text-white bg-green-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Reset
      </button>
    </>
  );
}

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

//example 21-------------------------------------------------------------------------------------------

import { useRef } from "react";

function App() {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Djalma";
  };

  return (
    <>
      <input
        type="text"
        ref={inputElement}
        className="text-4xl font-thin text-gray-900 dark:text-red"
      />
      <button
        type="button"
        onClick={() => focusInput()}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Focus & Write Djalma
      </button>
    </>
  );
}

//example 22-------------------------------------------------------------------------------------------

import useFetch from "./fetch/useFetch";

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d));
  },[url]);

  return [data];
};
//example 23-------------------------------------------------------------------------------------------

import { useState } from "react";
import "./style.css";

function generateId() {
  return Math.floor(Math.random() * 100);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          placeholder="New Todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <ul className="todo-list">
          {todos.map(({ text, id }) => (
            <li key={id} className="todo">
              <span>{text}</span>
              <button
                type="button"
                className="close"
                onClick={() => removeTodo(id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;

//example 24-------------------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemList = items.map(({strMeal, strMealThumb, idMeal}) => {
    return (
     <section className="card">
      <img src={strMealThumb}/>
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
     </section> 
    )
  });

  return <div className="items-container">
    {itemList};
  </div>
}


//example 25-------------------------------------------------------------------------------------------


export default App;
