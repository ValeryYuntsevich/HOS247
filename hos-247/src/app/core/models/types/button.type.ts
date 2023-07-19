import { TIcon } from '.';

export type TButton = {
  text: string;
  type: string;
  src?: string;
  styles: {
    [key: string]: string;
  };
  icon?: TIcon;
};
