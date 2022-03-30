import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RepositoryService } from './services/repository/repository.service';

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule],
    providers: [RepositoryService],
    exports: [CommonModule, NavbarComponent]
})
export class SharedModule {}
