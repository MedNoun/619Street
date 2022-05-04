import { NgModule } from '@angular/core';
import { HomepageModule } from '../homepage/homepage.module';
import { RegistrationModule } from '../registration/registration.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '../login/login.module';
import { CatalogueModule } from '../catalogue/catalogue.module';
import { ProductModule } from '../product/product.module';
import { WishlistModule } from '../wishlist/wishlist.module';
import { CheckboxComponent } from '../shared/components/checkbox/checkbox.component';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        HomepageModule,
        LoginModule,
        RegistrationModule,
        CatalogueModule,
        ProductModule,
        WishlistModule
    ],
    exports: [
        HomepageModule,
        LoginModule,
        RegistrationModule,
        CatalogueModule,
        ProductModule,
        WishlistModule
    ]
})
export class CoreModule {}
