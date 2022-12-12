import 'reflect-metadata';
import { Container } from 'typedi';
import { AppService } from './services/app/app.service';

Container.set(AppService, new AppService())
Container.get<AppService>('app').start()