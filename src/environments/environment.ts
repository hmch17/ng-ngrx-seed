import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
    production: false,
    routerConfig: { enableTracing: false },
    baseUrl: 'http://localhost:3000',
    imports: [
        StoreDevtoolsModule.instrument({ maxAge: 25 })
    ]
};
