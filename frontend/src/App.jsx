import './App.css'
import TrackedActivities from './components/TrackedActivities.jsx'
import Dashboard from './components/Dashboard.jsx'
import Pomodoro from './components/Pomodoro.jsx'


const today = new Date();
// function App() {} an old way to define components

const  App = () => {
  return (
    <div className='flex justify-center h-full'>
      <TrackedActivities></TrackedActivities>
      <div className='flex flex-col'>
        <Dashboard></Dashboard>
        <Pomodoro></Pomodoro>
      </div>
    </div>
  )
}

export default App
