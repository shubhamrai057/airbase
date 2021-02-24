import React from 'react';
import file from '../asset/file.svg';
import Avatar from '../components/Avatar';
import { RequestConsumer } from '../context/requestContext';

export default function RequesterDetail() {
  return (
    <RequestConsumer>
      {(props) => {
        const files = props.files[0].split('/');
        return <div className="rCard">
        <div className="rCard__row">
          <label className="rCard__label">Requested by</label>
          <div className="rCard__value">
            <Avatar src={props.requested_by.profile_picture} />
            {`${props.requested_by.first_name} ${props.requested_by.last_name}`}
          </div>
        </div>
        <div className="rCard__row">
          <label className="rCard__label">Cost</label>
          <div className="rCard__value">${props.cost_cents / 100}</div>
        </div>
        <div className="rCard__row rCard__row--half">
          <div className="rCard__column">
            <label className="rCard__label">Renewal Frequency</label>
            <div className="rCard__value">{props.renewal_frequency_in_months} month</div>
          </div>
          <div className="rCard__column">
            <label className="rCard__label">Annual Cost</label>
            <div className="rCard__value">${props.cost}</div>
          </div>
        </div>
        <div className="rCard__row">
          <label className="rCard__label">Expense Account</label>
          <div className="rCard__value">{props.expense_account}</div>
        </div>
        <div className="rCard__row">
          <label className="rCard__label">File</label>
          <div className="rCard__value">
            <img src={file} alt="file" className="rCard__file" />
            <a href={props.files[0]} target="_blank" className="rCard__receipt" rel="noreferer">
              {files[files.length - 1]}
            </a>
          </div>
        </div>
        <div className="rCard__row">
          <label className="rCard__label">Description</label>
          <div className="rCard__value">{props.description}</div>
        </div>
      </div>
      }}
    </RequestConsumer>
  )
}
