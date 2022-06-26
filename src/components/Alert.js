import React from 'react'

export default function Alert(props) {
  return (
    //if alert is not null it will show the class else will not show
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
    </div>
  )
}
