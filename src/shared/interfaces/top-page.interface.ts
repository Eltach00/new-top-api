export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface ITopPageModel {
  _id?: string;
  firstCategory: TopLevelCategory;

  secondCategory: string;

  alias: string;

  title: string;

  metaTitle: string;

  metaDescription: string;

  category: string;

  hh?: IHhData;

  advantages?: ITopPageAdvantage[];

  seoText?: string;

  tagsTitle: string;

  tags: string[];
}

export interface ITopPageAdvantage {
  title: string;

  description: string;
}
export interface IHhData {
  count: number;

  juniorSalary: number;

  middleSalary: number;

  seniorSalary: number;

  updatedAt: Date;
}
