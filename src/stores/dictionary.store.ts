import {
  GlobalWord,
  ReportedWord,
  UserExample,
  UserMeaning,
  UserWord
} from '@models';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export interface DictionaryHydration {
  globalWords?: Array<GlobalWord>;
  userWords?: Array<UserWord>;
  userMeanings?: Array<UserMeaning>;
  userExamples?: Array<UserExample>;
  reportedWords?: Array<ReportedWord>;
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

  reportedWords: Array<ReportedWord> = null;
  selectedReportedWord: ReportedWord = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setSelectedGlobalWord(item: GlobalWord) {
    this.selectedGlobalWord = item;
  }

  setSelectedUserWord(item: UserWord) {
    this.selectedUserWord = item;
  }

  setSelectedUserMeaning(item: UserMeaning) {
    this.selectedUserMeaning = item;
  }

  setSelectedUserExample(item: UserExample) {
    this.selectedUserExample = item;
  }

  setSelectedReportedWord(item: ReportedWord) {
    this.selectedReportedWord = item;
  }

  hydrate(data?: DictionaryHydration) {
    if (data.globalWords) this.globalWords = data.globalWords;
    if (data.userWords) this.userWords = data.userWords;
    if (data.userMeanings) this.userMeanings = data.userMeanings;
    if (data.userExamples) this.userExamples = data.userExamples;
    if (data.reportedWords) this.reportedWords = data.reportedWords;
  }
}
