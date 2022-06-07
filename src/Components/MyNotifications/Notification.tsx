/* eslint-disable no-nested-ternary */
import { CircularProgress } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { AuthContext } from '../../Contexts/AuthContext';
import Layout from '../Layout/Layout';

export default function MyNotifications() {
  const { rollNo }: any = useContext(AuthContext);
  const cookies = new Cookies();
  const [isLoading, setIsLoading] = React.useState(true);
  const [notifications, setNotifications] = React.useState([]);

  useEffect(() => {
    const body = new FormData();
    body.append('roll_no', cookies.get('roll_no'));
    fetch('https://django-tpc.herokuapp.com/notifications/', {
      headers: {
        Authorization: `Bearer ${cookies.get('access')}`,
      },
      body,
      method: 'POST',
    }).then((res) => res.json()).then((data) => {
      setNotifications(data);
      setIsLoading(false);
    });
  }, [rollNo]);

  return (
    <Layout>
      <h3>My Notifications</h3>
      {isLoading ? <CircularProgress /> : (
        notifications.length > 0 ? (
          notifications.map((notification) => (
            <div>Notif</div>))
        ) : (
          <div>No Notifications</div>
        )
      )}
    </Layout>
  );
}
