import React from 'react'
import "./SearchBar.css"
const SearchBar = () => {
  return (
    <>
    
     <div className="wpa-search-bar-input-wrapper wpa-flex wpa-content-center wpa-start-now-for-free">
        <input type="text"  placeholder='Search' />
        <button>search</button>
     </div>
    </>
  )
}

export default SearchBar