import React from 'react';


const SearchBar =(props)=> {
    return (
      <div className='col-4 navbar'>
          <input
          placeholder="type to search ..."
          className="form-control mr-2"
          value={props.value}
          onChange={(event) => props.setSearchMovie(event.target.value)}
        />
      </div>
    );
}


export default SearchBar