import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [ApiService],
    exports: []
})
export class DatafetcherModule {}
