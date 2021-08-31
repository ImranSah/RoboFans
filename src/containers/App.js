import React from "react";
import CardList from "../components/CardList";
import tachyons from "tachyons";
import SearchBox from "../components/SearchBox";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  fieldChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((user) => {
        this.setState({ robots: user });
        console.log(user);
      });
  }

  render() {
    const { robots, searchField } = this.state;

    const filterRobots = robots.filter((ele) => {
      return ele.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !filterRobots.length ? (
      <h1 style={{ textAlign: `center` }}>Loading....</h1>
    ) : (
      <div className="tc">
        <h1>{filterRobots.length === 0 ? "No Record Found!" : "RoboFans"}</h1>
        <SearchBox field={this.fieldChange} />
        <div className="container">
          {filterRobots.map((ele, i) => {
            return <CardList key={i} no={ele.name} name={ele.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
