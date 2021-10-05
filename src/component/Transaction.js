import React from 'react'

export default function Transaction({ text, amount }) {

    return (
        <li className={`money ${amount < 0 ? 'minus' : 'plus'}`}>
            {text} <span>${amount}</span><button className="delete-btn">x</button>
        </li>
     
    
    )
}
