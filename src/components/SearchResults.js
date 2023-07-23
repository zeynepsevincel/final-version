import React from 'react';
import "../App.css";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="row">
          {results.map((result) => (
            <div key={result.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={result.imageUrl} className="card-img-top" alt={result.name} />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
               
                  <p className="card-text">Category: {result.category}</p>
                  <p className="card-text">Price: {result.price}</p>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
