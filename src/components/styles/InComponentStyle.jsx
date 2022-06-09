import React from 'react'

const InComponentStyle = () => {
  const componentDiv = {textAlign:'center', color:'brown'};
  let heading = { color:'green' };
  var paragraph = { textAlign:'left' }
  return (
    <div style={componentDiv}>
      <h1 style={heading}>
        Component Style
      </h1>
      <p style={paragraph}>
        Styled in component
      </p>
    </div>
  )
}

export default InComponentStyle