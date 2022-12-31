import { FilterHydration, FilterStore } from './filter.store';
import { DictionaryHydration, DictionaryStore } from './dictionary.store';
import { BucketHydration, BucketStore } from './bucket.store';

export type RootStoreHydration = {
  // filterStore?: FilterHydration;
  dictionaryStore?: DictionaryHydration;
  bucketStore?: BucketHydration;
};

export class RootStore {
  // filterStore: FilterStore;
  dictionaryStore: DictionaryStore;
  bucketStore: BucketStore;

  constructor() {
    // this.filterStore = new FilterStore(this);
    this.dictionaryStore = new DictionaryStore(this);
    this.bucketStore = new BucketStore(this);
  }

  hydrate(data: RootStoreHydration) {
    // if (data.filterStore) this.filterStore.hydrate(data.filterStore);
    if (data.dictionaryStore)
      this.dictionaryStore.hydrate(data.dictionaryStore);
    if (data.bucketStore) this.bucketStore.hydrate(data.bucketStore);
  }
}
