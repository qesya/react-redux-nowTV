import React from 'react';

export default props => {
  const { setActivePage } = props;
  return (
    <nav>
      <a href='#' onClick={() => {
        setActivePage('member');
      }}>Members</a>
      <a href='#' onClick={() => {
        setActivePage('message');
      }}>Messages</a>
    </nav>
  )
}
