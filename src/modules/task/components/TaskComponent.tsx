import { TaskInterface } from '../interfaces/task.interface';
import { Checkbox } from 'primereact/checkbox';
import { Rating } from 'primereact/rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TaskComponentProps {
  task: TaskInterface;
  onDoneTask: Function;
  onShowForm: Function;
}

export const TaskComponent = ({ task, onDoneTask, onShowForm }: TaskComponentProps) => {
  return (
    <>
      <div
        className="flex items-stretch gap-4 rounded-lg border p-4 border-gray-700 hover:border-blue-500 transition-all hover:cursor-pointer"
        onDoubleClick={() => onShowForm(task)}
      >
        <div className="flex-1">
          <span className={`font-semibold text-blue-500 ${task.done && 'line-through'}`}>{task.summary}</span>
          <p className={task.done ? 'line-through' : ''}>{task.description}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Rating
            value={task.rate}
            cancel={false}
            onIcon={<FontAwesomeIcon icon={faStar} className="text-yellow-400" />}
            offIcon={<FontAwesomeIcon icon={faStar} className="text-gray-600" />}
          />
          <Checkbox checked={task.done} onClick={() => onDoneTask(task)} />
        </div>
      </div>
    </>
  );
};
