import React from 'react'

function Search({search, handleSearch}) {
    return (
        <>
        <input value={search} type='text' onChange={handleSearch}/>
        </>
    )
}

export default Search
