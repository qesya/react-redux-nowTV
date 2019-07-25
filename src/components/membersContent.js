import React from 'react';
import PropTypes from 'prop-types';

const messagesContent = props => {
  const { membersData } = props;
  if(membersData.length) {
    return (
      <div className='clear-fix'>
        <h2>All Members</h2>
        {
          membersData.map(data => (
            <div key={data.id} className='card' title={data.email}>
              <img src={data.avatar === null ? 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff' : data.avatar} alt=''/>
              <h1>{data.firstName} {data.lastName}</h1>
              <hr/>
              <span>IP: {data.ip}</span>
            </div>
          ))
        }
      </div>
    )
  }
  return null;
};

messagesContent.propTypes = {
  membersData: PropTypes.array.isRequired
};

export default messagesContent;
