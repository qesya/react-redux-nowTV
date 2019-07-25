import React from 'react'
import PropTypes from 'prop-types'
import {getPriorityString} from '../utils/strings';

const messagesContent =  props => {
  const { messagesData } = props;
  if(messagesData.length) {
    return (
      <div className='clear-fix'>
        <h2>All Messages</h2>
        {
          messagesData.map(data => (
            <div key={data.id} className={'msg-card'}>
              <span className={'msg-msg'}>{data.message}</span>
              <span className={'msg-time'}>{getPriorityString(data.timestamp)}</span>
            </div>
          ))
        }
      </div>
    )
  }
  return null;
};

messagesContent.propTypes = {
  messagesData: PropTypes.array.isRequired
};

export default messagesContent;
