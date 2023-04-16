export interface IProductCharacteristic {
  name: string;
  value: string;
}

export interface IProduct {
  _id?: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tags: string[];
  characteristics: IProductCharacteristic[];
}
