import React from 'react';

const Notification = ({ notification }) => {
  if (notification === null) return null;
  console.log(notification.status);
  return (
    <div className={`${notification.status} notification`}>
      {notification.alert}
    </div>
  );
};

export default Notification;
