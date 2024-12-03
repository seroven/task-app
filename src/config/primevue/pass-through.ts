import { PrimeReactPTOptions } from 'primereact/api';
import { ButtonPassThroughOptions } from 'primereact/button';

const buttonConfig: ButtonPassThroughOptions = {
  root: {
    style: {
      padding: '6px 10px'
    }
  }
};

export const PassThrough: PrimeReactPTOptions = {
  button: buttonConfig
};
