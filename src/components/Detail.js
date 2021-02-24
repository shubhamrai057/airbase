import React from 'react';
import amzlogo from '../asset/Gustologo.svg'
import RequesterDetail from './RequesterDetail';
import ApproverDetail from './ApproverDetail';
import { RequestConsumer } from '../context/requestContext';

export default function Detail() {
  return (
    <RequestConsumer>
      {(props) => {
        return <div className="card">
          <h3 className="card__title">
            <img src={props.service.logo} tittle="service logo" alt="service logo" className="card__img" />
            <span className="card__text">Request for {props.service.name} (#{props.id})</span>
          </h3>
          <div className="card__content">
            <div className="card__left">
              <RequesterDetail />
              <div className="card__message">
                <div className="card__danger-text">Your company is already paying for {props.service.name} on a recurring basis.</div>
                <div className="card__normal-text">(1 instance owned by John Smith).</div>
              </div>
              <div className="card__cta">
                <button className="card__button card__button--success">Approve</button>
                <button className="card__button card__button--danger">Deny</button>
              </div>
            </div>
            <div className="card__right">
              <ApproverDetail />
            </div>
          </div>
        </div>
      }}
    </RequestConsumer>
  )
}
