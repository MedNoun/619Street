import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { RegistrationModule } from '../registration/registration.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { ProductModule } from '../product/product.module';
import { BaseModule } from '../base/base.module';
import { PanierModule } from '../panier/panier.module';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        HomepageModule,
        LoginModule,
        RegistrationModule,
        CatalogueModule,
        ProductModule,
        BaseModule,
        PanierModule
    ],
    exports: [
        SharedModule,
        BaseModule,
        HomepageModule,
        LoginModule,
        RegistrationModule,
        CatalogueModule,
        ProductModule,
        PanierModule
    ]
})
export class CoreModule {}
