import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync(getMongoConfig()),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    AuthModule,
    TopPageModule,
    ReviewModule,
    ProductModule,
  ],
})
export class AppModule {}
