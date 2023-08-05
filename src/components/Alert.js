import React from 'react'

export default function Alert(props){

    const capitalize = (str) => {
        let word = str.slice(0, 1).toUpperCase() + str.slice(1)
        return word

    }
    return(

        <>
            <div style = {{height: "34px", marginBottom: "35px"}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}.
            </div>}
            </div>
        </>
    )
}