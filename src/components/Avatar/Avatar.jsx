import React from 'react'

const Avatar = ({ children, backgroundColor, px, py, padding, borderRadius, color, fontSize, textAlign }) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    borderRadius,
    color: color || 'black',
    fontSize,
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none"
  }
  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar