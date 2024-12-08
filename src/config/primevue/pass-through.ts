import { PrimeReactPTOptions } from 'primereact/api';
import { ButtonPassThroughOptions } from 'primereact/button';
import { DialogPassThroughOptions } from 'primereact/dialog';

const buttonConfig: ButtonPassThroughOptions = {
  root: {
    style: {
      padding: '6px 10px'
    }
  }
};

const dialogConfig: DialogPassThroughOptions = {
	mask: {
		className: 'backdrop-blur-sm'
	},
	header: {
		className: 'p-5'
	},
	content: {
		className: 'p-5 pt-0'
	}
}

export const PassThrough: PrimeReactPTOptions = {
  button: buttonConfig,
	dialog: dialogConfig
};
