import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';

@Module({
  controllers: [TopPageController],
  imports: [
   
  ],
})
export class TopPageModule {}
