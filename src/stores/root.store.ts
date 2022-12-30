import { FilterHydration, FilterStore } from './filter.store';
import { DictionaryHydration, DictionaryStore } from './dictionary.store';

export type RootStoreHydration = {
  filterStore?: FilterHydration;
  dictionaryStore?: DictionaryHydration;
};

export class RootStore {
  // filterStore: FilterStore;
  dictionaryStore: DictionaryStore;

  constructor() {
    // this.filterStore = new FilterStore(this);
    this.dictionaryStore = new DictionaryStore(this);
  }

  hydrate(data: RootStoreHydration) {
    // if (data.filterStore) this.filterStore.hydrate(data.filterStore);
    if (data.dictionaryStore)
      this.dictionaryStore.hydrate(data.dictionaryStore);
  }
}
