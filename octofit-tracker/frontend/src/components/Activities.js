import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://legendary-space-adventure-rrqwrgq6v662x4r-8000.app.github.dev/api/activities/')
      .then(response => {
        setActivities(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching activities:', error);
        setError('Failed to load activities. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-center">Activities</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;