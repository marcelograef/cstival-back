import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Ranges } from './ranges/ranges.entity';
import { RangesModule } from './ranges/ranges.module';

@Module({
  imports: [
    RangesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'cstivaldb.cwx5c4fxidqg.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'cstival2022',
      database: 'cstival',

      entities: [Ranges],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
