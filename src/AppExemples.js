function App() {
  const myName = "Djalma Feitosa";
  const multiply = (a, b) => a * b;
  const specialClass = "specialClass";
  // Example #1
  const number = [1, 2, 3, 4, 5];
  
  // Example #2
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

//Example 3
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
//Example 4
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

//example 5
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

//example 6
import { BsFillCartCheckFill, BsGithub } from "react-icons/bs";
function App() {
  return (
    <>
      <BsFillCartCheckFill />
      <BsGithub/>
    </>
  );
}

//example 7

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

//example 8
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

//example 10
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

//examplle 11
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

//example 12
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


export default App;
