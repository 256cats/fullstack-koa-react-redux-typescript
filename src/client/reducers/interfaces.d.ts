import { IFilters, IMatch } from '../../shared'
// todo: use immutable.js or similar
export interface IAppStore {
  filters: IFilters;
  matches: Array<IMatch>;
  ui: {
    isLoading: boolean;
  }
}

export interface RootStore {
  app: IAppStore;
}