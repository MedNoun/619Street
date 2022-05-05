import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { JwtService } from './service/jwt.service';

@NgModule({
    declarations: [],
    imports: [HttpClientModule],
    providers: [ApiService, JwtService],
    exports: []
})
export class DatafetcherModule {}
