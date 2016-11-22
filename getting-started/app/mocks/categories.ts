export interface ICategory {
  name: string;
  selected: boolean;
}

export const categories: ICategory[] = [
  { name: 'All', selected: true},
  { name: 'Web', selected: false},
  { name: 'Mobile', selected: false},
  { name: 'IoT', selected: false},
  { name: 'Data Engineering', selected: false},
];


