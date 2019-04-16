import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <form action='/search' method='POST'>
          <input type='text' name='name' required />
          <input type='submit' />
        </form>
      </div>
    );
  }
}
export default Search;