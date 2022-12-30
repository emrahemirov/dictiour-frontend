import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root.store';

export interface FilterHydration {}

export class FilterStore {
  root: RootStore;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  hydrate(data?: FilterHydration) {}
}
