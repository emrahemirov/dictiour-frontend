import { GlobalWord, UserExample, UserMeaning, UserWord } from '@models';
import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root.store';

export interface DictionaryHydration {
  globalWords: Array<GlobalWord>;
  userWords: Array<UserWord>;
  userMeanings: Array<UserMeaning>;
  userExamples: Array<UserExample>;
}

export class DictionaryStore {
  root: RootStore;

  globalWords: Array<GlobalWord> = null;
  selectedGlobalWord: GlobalWord = null;

  userWords: Array<UserWord> = null;
  selectedUserWord: UserWord = null;

  userMeanings: Array<UserMeaning> = null;
  selectedUserMeaning: UserMeaning = null;

  userExamples: Array<UserExample> = null;
  selectedUserExample: UserExample = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setSelectedGlobalWord(index: number) {
    this.selectedGlobalWord = this.globalWords?.[index];
  }

  setSelectedUserWord(index: number) {
    this.selectedUserWord = this.userWords?.[index];
  }

  setSelectedUserMeaning(index: number) {
    this.selectedUserMeaning = this.userMeanings?.[index];
  }

  setSelectedUserExample(index: number) {
    this.selectedUserExample = this.userExamples?.[index];
  }

  hydrate(data?: DictionaryHydration) {
    if (data.globalWords) this.globalWords = data.globalWords;
  }
}
