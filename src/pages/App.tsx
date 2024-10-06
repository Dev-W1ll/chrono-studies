import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
