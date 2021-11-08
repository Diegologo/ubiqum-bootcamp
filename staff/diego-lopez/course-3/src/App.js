//IMPORTs, they are IMPORTant.
import React from 'react';
import './App.css';
import CourseList, {addScheduleTimes} from './components/CourseList';
import useData from './utilities/firebase';

const App = () => {
  const [schedule, loading, error] = useData('/', addScheduleTimes); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>

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