import React from 'react'

export default (props: any) => (
    <button onClick={props.onClick}>{props.children}</button>
)
