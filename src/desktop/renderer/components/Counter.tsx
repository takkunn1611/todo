import * as React from 'react'

export const Counter = (props: any) => (
    <div>
        <div>count: { props.count }</div>
        <button onClick={ props.plus }>+</button>
        <button onClick={ props.minus }>-</button>
    </div>
)