import { ReactElement } from 'react';
import { Control, Controller } from 'react-hook-form';

interface ControlWrapperComponentProps {
  label?: string;
  className?: string;
  children: (field: any) => ReactElement;
  control: Control<any>;
  controlName: string;
  defaultValue?: any;
  errorMessage?: string;
}

export const ControlWrapperComponent = ({
  label,
  className,
  children,
  control,
  controlName,
  defaultValue,
  errorMessage
}: ControlWrapperComponentProps) => {
  return (
    <div className={`${className} flex flex-col relative`}>
      {label && <span className="pl-3 absolute mb-1 text-sm text-white opacity-60 top-[-20px]">{label}</span>}
      {control ? (
        <Controller
          control={control}
          name={controlName}
          defaultValue={defaultValue}
          render={({ field }) => children(field)}
        ></Controller>
      ) : (
        children(null)
      )}
      {errorMessage && <span className="font-bold pl-2 mt-1 text-red-400">{errorMessage}</span>}
    </div>
  );
};
