import { Languages } from '@utils/enums';

export type GlobalWord = {
  id: string;
  text: string;
  language: Languages;
  asUserWord: number;
  asUserMeaning: number;
  asUserExample: number;
};
