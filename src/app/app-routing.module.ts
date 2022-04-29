import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductResolverService } from './product/services/product-resolver.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'catalogue',
        component: CatalogueComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'product/:id',
        component: ProductViewComponent,
        resolve: { data: ProductResolverService }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
