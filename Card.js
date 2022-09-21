import '../styles/main.css';
import { useState } from 'react';
// import React from 'react'

// export default function Card() {
//   return (
//     <div>
//       Card
//     </div>
//   )
// }

const Card = (props) => {
    const [isChanged, setIsChanged] = useState(true);

    return (
    <div className="card-wrapper" style={{
        backgroundColor: isChanged ? 'blue' : 'white',
        color: 'black',
    }}>
        <b>{props.title}</b>
        <h5>{props.subTitle}</h5>
        <p>{props.details}</p>
        <button onClick={() => {
            setIsChanged(!isChanged);
        }}> Click ME
        </button>
    </div>
    );
};

export default Card;