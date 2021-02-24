import React from 'react'

export default function Avatar(props) {
  return (
    <div className="avatar">
      {
        props.src &&
        <img src={props.src} title="user" alt="user" className="avatar__image" />
      }
    </div>
  )
}
