import React from 'react'

export default function Alert(props) {
  const capitalize = (word) =>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
     <div style={{height: '50px'}}>
     {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
     </div>}
     </div>
    
  )
}


// props.alert && ......
// THIS IS HAPPENS BCZ ALL THE JSX WILL BE CONVERTED TO JAVASCRIPT CALLS
// in app.js component setAlert is null initially thats why it generates an error
// thats why we use here props.alert && .... It means if props.alert is not null then 
// further evaluate


