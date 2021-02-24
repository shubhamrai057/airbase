import React from 'react';
import ApproverList from '../components/ApproverList';
import { RequestConsumer } from '../context/requestContext';

export default function ApproverDetail() {
  return (
    <RequestConsumer>
      {
        (props) => {
          const approvedList = props.approvers.filter(approver => approver.status === 'accepted');
          const pendingList = props.approvers.filter(approver => approver.status === 'created');
          return <div className="approver">
            {
              approvedList.length &&
              <div className="approver__confirmed">
                {
                  approvedList.map((approver, index) => {
                    return (
                      <ApproverList key={index} data={approver} type='Approved' />
                    )
                  }
                )
                }
              </div>
            }
            {
              pendingList.length &&
              <div className="approver__pending">
                {
                  pendingList.map((approver, index) => {
                    return (
                      <ApproverList key={index} data={approver} type='Pending' />
                    )
                  }
                )
                }
              </div>
            }
          </div>
        }
      }
    </RequestConsumer>
  )
}
