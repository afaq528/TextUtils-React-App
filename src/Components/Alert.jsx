import React from 'react'

function Alert(props) {
return (
props.alert &&
<div className="alert theme-warning position-relative" role="alert"> <div>
<strong> {props.alert.type} </strong>: {props.alert.msg}
</div>
</div>

)
}

export default Alert
