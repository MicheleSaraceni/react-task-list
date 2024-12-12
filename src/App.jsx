import React from 'react';
import tasks from '../data/tasksData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const currentTasks = tasks.filter(task => task.state !== 'completed');
  const completedTasks = tasks.filter(task => task.state === 'completed');

  return (
    <div className="p-1 maxW">
      <div className="p-1" style={{ backgroundColor: '#90f9ce' }}>
        <div className="container">
          <h1 className="fw-bold">Task Manager</h1>
        </div>
      </div>

      <div className="container my-4">
        <h2 className="mt-5">Current Tasks ({currentTasks.length})</h2>
        <ul className="list-unstyled ps-0">
          {currentTasks.map(task => (
            <li key={task.id} className="mb-4 border-bottom pb-3">
              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <h5 className="mb-1">{task.title}</h5>
                  <div>Priority: {task.priority}</div>
                  <div>Est. time {task.estimatedTime}</div>
                </div>
                <span className="badge" style={{ backgroundColor: getStateColor(task.state) }}>
                  {task.state}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <hr />

        <h2 className="mt-5">Completed Tasks ({completedTasks.length})</h2>
        <ul className="list-unstyled ps-0">
          {completedTasks.map(task => (
            <li key={task.id} className="mb-4 border-bottom pb-3">
              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <h5 className="mb-1">{task.title}</h5>
                  <div>Priority: {task.priority}</div>
                  <div>Est. time {task.estimatedTime}</div>
                </div>
                <span className="badge" style={{ backgroundColor: getStateColor(task.state) }}>
                  {task.state}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function getStateColor(state) {
  switch (state) {
    case 'backlog':
      return '#cd6b6b';
    case 'in_progress':
      return '#d4a660';
    case 'completed':
      return '#6bcda6';
    default:
      return '#ccc';
  }
}

export default App;
