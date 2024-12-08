import { ReactNode } from 'react';

interface FieldWrapperComponentProps {
  label?: string;
  children: ReactNode;
  className?: string;
  defaultValue?: any;
  errorMessage?: string;
}

export const FieldWrapperComponent = ({ label, children, className, errorMessage }: FieldWrapperComponentProps) => {
  return (
    <div className={`${className} flex flex-col relative`}>
      {label && <span className="pl-3 absolute mb-1 text-sm text-white opacity-60 top-[-20px]">{label}</span>}
      {children}
      {errorMessage && <span className="font-bold pl-2 mt-1 text-red-400">{errorMessage}</span>}
    </div>
  );
};
