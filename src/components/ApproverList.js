import React from 'react';
import Moment from 'react-moment';
import Avatar from '../components/Avatar';

export default function ApproverList(props) {
  return (
    <div className="list">
      <div className="list__title">{props.type}</div>
      <div className="list__row">
        <div className="list__left">
          <div className="list__tag"></div>
          <div className="list__detail">
            <Avatar src={props.data.approver.profile_picture} />
            <div className="list__personal">
              <span className="list__name">{props.data.approver.first_name} {props.data.approver.last_name}</span>
              <span className="list__other">({props.data.approver.email})</span>
              {
                props.type === 'Approved' ?
                <div className="list__other">
                  {props.type} &nbsp;
                  <Moment format="MMM DD, YYYY">{props.data.approver.last_updated_date}</Moment>
                </div> :
                <div className="list__other">
                  Last notified &nbsp;
                  <Moment format="MMM DD, YYYY">{props.data.approver.last_notified_time}</Moment>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="list__right">
          {
            props.type === 'Pending' &&
            <input type="checkbox" className="list__radio" />
          }
          <span className={`list__image ${props.type === 'Approved' && 'list__image--checked'}`}></span>
        </div>
      </div>
    </div>
  )
}
