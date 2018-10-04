import React from 'react';

const Scroll =(props) => {
    return (
        <div style={{overflowY:'scroll', border:'5px solid black', height:'800px'}} className='tc'>
            {props.children}
        </div>
    )
}

export default Scroll;