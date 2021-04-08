import Header from './component/Header'
import Tasks from './component/Tasks.js'
import {useState} from 'react'

function App() {
  const [tasks,setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Food Shopping',
        day: 'March 3rd at 1:30pm',
        reminder: true
      },
      {
        text: 'Bank Appointment',
        day: 'April 1st at 2:30pm',
        reminder: true,
        id: 559
      }
] )

//Delete Task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }


  //toggle reminder
  const toggleReminder=(id)=>{
    console.log(id)

    // setTasks(tasks.map((task)=>
    //   task.id===id?{...task,reminder:
    //     !task.reminder}:task
    //   )
    // )

  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}   
    </div>
  );
}

export default App;
