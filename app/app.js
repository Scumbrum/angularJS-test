import angular from 'angular';
import 'angular-route';
import './app.templates';
import { appConfig } from './app.config';
import { APP_MODULES } from './app.constants';

angular.module('myApp', APP_MODULES)
    .config(appConfig);