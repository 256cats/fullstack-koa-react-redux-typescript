export interface IRange {
  gte?: number; 
  lte?: number;
}

export interface IFilters {
  age: IRange;
  height: IRange;
  maxDistance?: IRange;
  hasPhoto: boolean;
  compatibilityScore: IRange;
  inContact: boolean;
  isFavourite: boolean;
}