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

  increaseBucketWord() {
    const selectedGlobalWord = this.root.dictionaryStore.selectedGlobalWord;

    const isWordExist = Object.keys(this.bucketWords).includes(
      selectedGlobalWord.id
    );
    if (isWordExist) {
      this.bucketWords[selectedGlobalWord.id].count++;
      return;
    }

    this.bucketWords[selectedGlobalWord.id] = {
      word: selectedGlobalWord,
      count: 1
    };
  }

  decreaseBucketWord() {
    const selectedGlobalWord = this.root.dictionaryStore.selectedGlobalWord;

    this.bucketWords[selectedGlobalWord.id].count--;

    if (this.bucketWords[selectedGlobalWord.id].count === 0) {
      delete this.bucketWords[selectedGlobalWord.id];
    }
  }

  removeBucketWord() {
    const selectedGlobalWord = this.root.dictionaryStore.selectedGlobalWord;

    delete this.bucketWords[selectedGlobalWord.id];
  }

  hydrate(data?: BucketHydration) {}
}
