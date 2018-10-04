import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                onChange={searchChange}
                type='Search' 
                placeholder='search robots' 
                className='pa3 ba b--green bg-lightest-blue'    
                />
        </div>  
    );
}


export default SearchBox;