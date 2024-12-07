import { useEffect, useState } from 'react';
import { TaskInterface } from './interfaces/task.interface';
import { tasks as data } from './data/tasks';
import { TaskComponent } from './components/TaskComponent';
import { Button } from 'primereact/button';
import { TaskFormComponent } from './components/TaskFormComponent';

export const TaskPage = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setTasks(data);
  }, []);

  const onDoneTask = (task: TaskInterface) => {
    const newTasks = tasks.map((t) =>
      t.summary == task.summary ? { ...task, done: !task.done } : t
    );
    setTasks(newTasks);
  };

  return (
    <>
      <section className="max-w-4xl m-auto">
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold">Tasks</span>
          <Button icon="pi pi-plus" className="w-8 h-8" onClick={() => setShowForm(true)} />
        </div>
        <hr className="border-gray-400 border my-2" />
        <div className="flex flex-col gap-4">
          {tasks.map((t, key) => {
            return (
              <TaskComponent key={key} task={t} onDoneTask={onDoneTask} onShowForm={setShowForm} />
            );
          })}
        </div>
      </section>
      <TaskFormComponent visible={showForm} onHide={setShowForm} />
    </>
  );
};
