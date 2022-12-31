import { Languages } from '@utils/enums';
import { FilterTypes } from '@utils/types';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export interface FilterHydration {
  isLastData?: { [key: string]: boolean };
  page?: { [key: string]: number };
  language?: { [key: string]: null | Languages };
  search?: { [key: string]: string };
}

export class FilterStore {
  root: RootStore;

  page: { [key: string]: number } = {
    globalWords: 1,
    userWords: 1,
    userMeanings: 1,
    userExamples: 1
  };

  language: { [key: string]: null | Languages } = {
    globalWords: null,
    userWords: null,
    userMeanings: null,
    userExamples: null
  };

  search: { [key: string]: string } = {
    globalWords: '',
    userWords: '',
    userMeanings: '',
    userExamples: ''
  };

  isLastData: { [key: string]: boolean } = {
    globalWords: false,
    userWords: false,
    userMeanings: false,
    userExamples: false
  };

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  prevPage(filterType: FilterTypes) {
    if (this.page[filterType] === 1) return;

    this.page[filterType]--;
  }

  nextPage(filterType: FilterTypes) {
    this.page[filterType]++;
  }

  resetPage(filterType: FilterTypes) {
    this.page[filterType] = 1;
  }

  setLanguage(filterType: FilterTypes, language: Languages) {
    this.language[filterType] = language;
  }

  resetLanguage(filterType: FilterTypes) {
    this.language[filterType] = null;
  }

  setSearch(filterType: FilterTypes, text: string) {
    this.search[filterType] = text;
  }

  resetSearch(filterType: FilterTypes) {
    this.search[filterType] = '';
  }

  hydrate(data?: FilterHydration) {
    if (data.isLastData) Object.assign(this.isLastData, data.isLastData);
    if (data.page) Object.assign(this.page, data.page);
    if (data.language) Object.assign(this.language, data.language);
    if (data.search) Object.assign(this.search, data.search);
  }
}
