import React from 'react';

const Ratings = (props) => {
  return (
    <div className="col-4 form-input">
      <select className="form-select" aria-label="Default select example">
        <option selected>Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );

}

export default Ratings;
