import React from 'react'
import Button from './Button'

export default (props: any) => (
    <div>
        <div>count: { props.count }</div>
        <Button onClick={ props.plus }>+</Button>
        <Button onClick={ props.minus }>-</Button>
    </div>
)