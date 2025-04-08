import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('https://legendary-space-adventure-rrqwrgq6v662x4r-8000.app.github.dev/api/workouts/')
      .then(response => {
        setWorkouts(response.data);
      })
      .catch(error => {
        console.error('Error fetching workouts:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Workouts</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;