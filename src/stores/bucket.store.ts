import { GlobalWord } from '@models';
import { BucketWord } from '@utils/types';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export interface BucketHydration {}

export class BucketStore {
  root: RootStore;
  bucketWords: { [id: string]: BucketWord } = {};

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  addBucketWord(item: GlobalWord) {
    const isWordExist = Object.keys(this.bucketWords).includes(item.id);
    if (isWordExist) {
      this.bucketWords[item.id].count++;
      return;
    }

    this.bucketWords[item.id] = {
      word: item,
      count: 1
    };
  }

  decreaseBucketWord(item: GlobalWord) {
    this.bucketWords[item.id].count--;

    if (this.bucketWords[item.id].count === 0) {
      delete this.bucketWords[item.id];
    }
  }

  removeBucketWord(item: GlobalWord) {
    delete this.bucketWords[item.id];
  }

  hydrate(data?: BucketHydration) {}
}
