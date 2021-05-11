import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  console.log(alertContext);
  return (
    <div>
      <h1>ksksks</h1>
    </div>
  );
};

export default Alerts;

// alertContext.alerts.length > 0 &&
// alertContext.alerts.map((alert) => (
//   <div key={alert.id} className={`alert ${alerts.type}`}>
//     {alerts.msg}
// ))
