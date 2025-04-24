import componentsModule from './components/components.module';
import userListModule from './pages/user-list/user-list.module';
import userDetailsModule from './pages/user-details/user-details.module';
import ErrorModule from './pages/error/error.module';
import ServiceModule from './services/services.module';

export const APP_MODULES = [
    'ngRoute',
    'templates',
    componentsModule,
    userListModule,
    userDetailsModule,
    ErrorModule,
    ServiceModule
]; 