export interface IConverter {
  name: string;
  isSelected: Boolean;
  convert(data: any): [string, any];
}
