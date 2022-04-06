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
      host: 'localhost',
      port: 33060,
      username: 'root',
      password: 'secret',
      database: 'cstival',

      entities: [Ranges],
      synchronize: true,
    }),
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
