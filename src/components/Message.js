import React from 'react';
import lock from '../asset/lock-ico.png';

export default function Message() {
  return (
    <div className="message">
      <img src={lock} title="lock" alt="lock" className="message__ico" />
      <span className="message__title">Security Message</span>
      <span className="message__copy">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</span>
    </div>
  )
}
