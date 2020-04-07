import React from 'react';



// const props = {
//     onClick: () => "function",
//     value = "x"
// }

// const { value } = props;

// Destrcuter the props above in curley brackets below passing them into our 
// component for dyer code.

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'

}

const Square = ({ value, onClick }) => (

<button style={style} onClick={onClick}>
    {value}
</button>

)

export default Square;
