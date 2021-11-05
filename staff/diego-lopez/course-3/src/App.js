//IMPORTs, they are IMPORTant.
import React, { useState, useEffect } from 'react';
import './App.css';
import CourseList, { addScheduleTimes } from './components/CourseList';

const App = () => {
  const [schedule, setSchedule] = useState();
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  //useEffect tiene propiedades asíncronas.
  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(addScheduleTimes(json));
     
    }
    fetchSchedule();
  }, [url]);

  if (!schedule) return <h1>Loading schedule...</h1>;

  return (
    <div className="container">
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </div>
  );
};

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);


export default App;