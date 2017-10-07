import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
    production: false,
    routerConfig: { enableTracing: true },
    baseUrl: 'http://localhost:3000',
    imports: [
        StoreDevtoolsModule.instrument({ maxAge: 25 })
    ]
};
