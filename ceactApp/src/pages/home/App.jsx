import "./style.css";
import React, { useState } from "react";
import { ListPlus } from "phosphor-react";
import { Card } from "../../components/Card";

function App() {

  const [collection, setCollection] = useState([]);
  const [user, setUser] = useState({
    
    name: "",
    avatar: "",
    location: "",
    followers: 0,
    id:0
  });

  //const outronome = user.name;
  function handleAddPerson(event) {
    event.preventDefault();
   
    
    fetch(`https://api.github.com/users/${user.name}`)
    .then((response) => response.json())
    .then((data) => {
      setCollection((prevstate) => [
        ...prevstate,
        { 
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          followers: data.followers,
          id: data.id,
          text: console.log("hey set"),
        },
      ]);
    })
    .catch((err) => console.log(err));
  
   
    setUser((prevstate) => ({...prevstate,  name: ""}));
  
  }
    function handleDelete(location) {
      setCollection((prevState) =>
        (prevState.filter((person) => person.location !== location)
      ));
    }

  return (
    //in react you need to fragment the tags in only one, use <> </> or a <div> </div> tag.
    <div className="container">
      <h1>
        Attendance Register 
        <ListPlus size={32} />
      </h1>

      <form action="" onSubmit={handleAddPerson}>
        <input
          type="text"
          placeholder="Github User"
          onChange={(e) =>
            setUser((prevstate) => ({ ...prevstate, name: e.target.value }))
          }
          value={user.name}
        />

        <button type="submit">ADD</button>
      </form>
      <>
        {collection.map((person) => (
          <>
            <Card
              key={person.id}
              name={person.name}
              avatar={person.avatar}
              location={person.location}
              followers={person.followers}
            />
            <button
              className="deleteBut"
              onClick={() => handleDelete(person.location)}
            >
              Delete
            </button>
          </>
        ))}
      </>
    </div>
  );
}

export default App;
