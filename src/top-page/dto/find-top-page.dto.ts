import { IsEnum } from 'class-validator';
import { TopLevelCategory } from 'src/shared/interfaces/top-page.interface';

export class FindTopPageDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;
}
