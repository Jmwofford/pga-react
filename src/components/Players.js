import React, { Component } from "react";

class Players extends Component {
  render() {
    return this.props.players.map(player => (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Thru</th>
            <th>Score</th>
            <th>Strokes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {player.lastName},{player.firstName}
            </td>
            <td>{player.score}</td>
            <td>-18</td>
            <td>266</td>
          </tr>
        </tbody>
      </table>
    ));
  }
}
export default Players;
