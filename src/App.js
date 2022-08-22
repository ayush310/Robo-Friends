import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import ContactsUsModal from "./components/Form/ContactUsModal";
import axios from "axios";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [robots, setrobots] = useState([]);
  const [searchField, setsearchField] = useState("");

  const search = async () => {
    const response = await axios.get(API_URL);
    // console.log(response.data);
    setrobots(response.data);
  };
  // console.log(robots);

  useEffect(() => {
    search();
  }, []);

  const onSearch = (e) => {
    setsearchField(e.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <>
      <div className="tc">
        <h1 className="f1">Robo-Buddies</h1>
        <SearchBox searchChange={onSearch} />
        <ContactsUsModal className="conatct-us" />
        <CardList robots={filteredRobots} />
      </div>
    </>
  );
}

export default App;
