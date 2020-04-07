import React from 'react';


// const props = {
//     onClick: () => "function",
//     value = "x"
// }

// const { value } = props;

// Destrcuter the props above in curley brackets below passing them into our 
// component for dyer code.

const Square = ({ value, onClick }) => (

<button onClick={onClick}>
    {value}
</button>

)

export default Square;
