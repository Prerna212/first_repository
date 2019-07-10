import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
class Counter extends Component {
  state = {
    movie: getMovies()
  };

  handleDelete = item => {
    console.log(item);
    let movies = this.state.movie.filter(movie => movie._id !== item._id);
    this.setState({ movie: movies });
  };
  renderTable() {}
  render() {
    let count = this.state.movie.length;
    if (count === 0) return <p>There are no movies in the DB</p>;

    return (
      <div>
        <p>
          There are <b>{this.state.movie.length}</b> movies in the DB
        </p>
        {
          <table className="table">
            <tbody>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
              {this.state.movie.map(item => {
                return (
                  <tr>
                    <td>{item.title}</td>
                    <td>{item.genre.name}</td>
                    <td>{item.numberInStock}</td>
                    <td>{item.dailyRentalRate}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.handleDelete(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
export default Counter;
