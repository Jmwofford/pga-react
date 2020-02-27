import React, { Component } from "react";
import Players from "./components/Players";
class App extends Component {
  state = {
    players: [
      {
        id: 1,
        firstName: "Ferris",
        lastName: "Bueller",
        score: 100,
        stroke: 0
      },
      {
        id: 2,
        firstName: "Phil",
        lastName: "Mickelson",
        score: 66,
        stroke: 0
      },
      {
        id: 3,
        firstName: "Arnold",
        lastName: "Palmer",
        score: 84,
        stroke: 0
      }
    ],
    courses: [
      {
        name: "Pebble Beach GL (Pebble Beach, Calif.)"
      },
      {
        name: "Kapalua Plantation Course."
      },
      {
        name: "Spyglass Hill."
      },
      {
        name: "Harbour Town."
      },
      {
        name: "TPC Sawgrass"
      },
      {
        name: "Sea Island"
      },
      {
        name: "Old White TPC"
      },
      {
        name: "Torrey Pines South"
      }
    ]
  };

  render() {
    console.log(this.props.players);
    return (
      <div className="App">
        <h2>PGA ADMIN LEADERBOARD </h2>
        <Players players={this.state.players} />
        {/* give me my props..lol */}
      </div>
    );
  }
}
export default App;
