import { Dialog } from 'primereact/dialog';
import { TaskDataInterface, TaskInterface } from '../interfaces/task.interface';
import { ModalBreakpoints } from '../../../shared/constants/modal-breakpoints';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from 'primereact/button';
import { useEffect } from 'react';
import { FieldWrapperComponent } from '../../../components/FieldWrapperComponent';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { yupResolver } from '@hookform/resolvers/yup';
import { Rating } from 'primereact/rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FormTaskComponentProps {
  task: TaskInterface | null;
  visible: boolean;
  onHide: Function;
  onSave: Function;
}

export const TaskFormComponent = ({ task = null, visible, onHide, onSave }: FormTaskComponentProps) => {
  const taskFormSchema = yup.object({
    summary: yup.string().required(),
    description: yup.string().required(),
    rate: yup.number().required().min(1)
  });

  const {
    register,
    formState: { errors },
    control,
    reset,
    getValues,
    trigger
  } = useForm<TaskDataInterface>({
    resolver: yupResolver(taskFormSchema)
  });

  useEffect(() => {
    if (!task) return;
    reset({
      summary: task.summary,
      description: task.description,
      rate: task.rate
    });
  }, [task]);

  // const onStarSelected = (rate: number) => {
  //   console.log(rate);
  //   setValue('rate', rate);
  //   const data = getValues();
  //   onSave(data);
  // };

  const onSubmit = async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const data = getValues();
    onSave(data);
  };

  const hide = () => {
    reset({
      summary: '',
      description: '',
      rate: 0
    });

    onHide(false);
  };

  return (
    <Dialog
      header={`${task ? 'Edit' : 'New'} Task`}
      visible={visible}
      onHide={hide}
      draggable={false}
      breakpoints={ModalBreakpoints.normal}
    >
      <br />
      <div className="flex items-stretch">
        <FieldWrapperComponent label="Summary" className="flex-1">
          <InputText {...register('summary')} invalid={!!errors.summary} className="w-full" />
        </FieldWrapperComponent>

        <div className="flex-1 flex justify-center gap-4 text-2xl items-center">
          <Controller
            name="rate"
            control={control}
            render={({ field }) => (
              <Rating
                value={field.value}
                onChange={field.onChange}
                cancel={false}
                onIcon={<FontAwesomeIcon icon={faStar} className="text-yellow-400" />}
                offIcon={
                  <FontAwesomeIcon icon={faStar} className={`${!!errors.rate ? 'text-red-400' : 'text-gray-600'} `} />
                }
              />
            )}
          />
        </div>
      </div>
      <FieldWrapperComponent label="Description" className="flex-1 my-7">
        <InputTextarea {...register('description')} invalid={!!errors.description} cols={2} className="w-full" />
      </FieldWrapperComponent>

      <div className="w-full flex justify-center mt-4">
        <Button label="Save" icon="pi pi-save" onClick={onSubmit} />
      </div>
    </Dialog>
  );
};
