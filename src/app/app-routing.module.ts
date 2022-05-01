import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageResolverService } from './homepage/services/homepageResolver.service';
import { CatalogueResolverService } from './catalogue/services/catalogueResolver.service';
import { LoginComponent } from './login/login.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductResolverService } from './product/services/product-resolver.service';
import { RegistrationComponent } from './registration/registration.component';
import { BaseComponent } from './base/base.component';
import { BaseResolverService } from './base/services/base-resolver.service';
import { LoginResolverService } from './login/services/loginResolver.service';
import { RegisterResolverService } from './registration/services/registerResolver.service';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        resolve: {
            content: BaseResolverService
        },
        children: [
            {
                path: 'homepage',
                component: HomepageComponent,
                resolve: { content: HomepageResolverService }
            },
            {
                path: 'catalogue',
                component: CatalogueComponent,
                resolve: { content: CatalogueResolverService }
            },
            {
                path: 'login',
                component: LoginComponent,
                resolve: { content: LoginResolverService }
            },
            {
                path: 'register',
                component: RegistrationComponent,
                resolve: { content: RegisterResolverService }
            },
            {
                path: 'product/:id',
                component: ProductViewComponent,
                resolve: { data: ProductResolverService }
            },
            { path: '**', redirectTo: '/homepage' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
