import styles from './App.module.css';
import Logo from "../public/Logo.svg";
import { HeaderInput } from './components/HeaderInput';
import { NoTasks } from './components/NoTasks';
import { useState } from 'react';
import { TaskItem } from './components/TaskItem';

interface TaskProps {
  id: string
  description: string
  hasCompleted: boolean
  data: Date
}

function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function createTask (description: string) {
    const newTask: TaskProps = {
      id: description,
      data: new Date(),
      description,
      hasCompleted: false,
    }

    setTasks(prev => [...prev, newTask]);
  }

  function toggleTask (taskToToggle: TaskProps) {
    
    const newArr = tasks.map(task => {
      if (task.id === taskToToggle.id) {
        return { ...task, hasCompleted: !task.hasCompleted }
      }

      return task;
    });

    setTasks(newArr);
  }

  function deleteTask (taskToDelete: TaskProps) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo}/>
      </header>

      <main className={styles.main}>

        <div className={styles.mainContent}>
          <HeaderInput createTask={createTask} />

          <div className={styles.mainBody}>

            <div className={styles.taskCounter}>
              <div className={styles.countTask}>
                Tarefas criadas

                <span> {tasks.length}</span>
              </div>

              <div className={styles.completedTask}>
                Concluídas

                {
                  tasks.length === 0 
                  ?
                    <span> 0</span>
                  :
                    <span> {tasks.filter(task => task.hasCompleted === true).length} de {tasks.length}</span>
                }
              </div>
            </div>

            {
              tasks.length === 0
              ?
                <NoTasks />
              :
                <div>
                  {
                    tasks.map(task => {
                      if(!task.hasCompleted) {
                        return (
                          <TaskItem 
                            key={task.id}
                            task={task}
                            toggleTask={toggleTask}
                            deleteTask={deleteTask}
                          />
                        );
                      }
                    })
                  }
                  {
                    tasks.map(task => {
                      if(task.hasCompleted) {
                        return (
                          <TaskItem 
                            key={task.id}
                            task={task}
                            toggleTask={toggleTask}
                            deleteTask={deleteTask}
                          />
                        );
                      }
                    })
                  }
                </div>
            }



          </div>
        </div>

      </main>
    </>
  )
}

export default App
