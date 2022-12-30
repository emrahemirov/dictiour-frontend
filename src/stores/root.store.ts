import { FilterHydration, FilterStore } from './filter.store';

export type RootStoreHydration = {
  filterStore?: FilterHydration;
};

export class RootStore {
  filterStore: FilterStore;

  constructor() {
    this.filterStore = new FilterStore(this);
  }

  hydrate(data: RootStoreHydration) {
    if (data.filterStore) {
      this.filterStore.hydrate(data.filterStore);
    }
  }
}
