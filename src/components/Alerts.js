import React from 'react'
import './css/Alerts.css'
const Alerts = (props) => {
  return (
    <div className='alertmsg'>
      <div className="alert alert-primary" role="alert">
{props.message}
</div>
    </div>
  )
}

export default Alerts
