import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PrepaymentsSharedModule } from 'app/shared/shared.module';
import { PrepaymentsCoreModule } from 'app/core/core.module';
import { PrepaymentsAppRoutingModule } from './app-routing.module';
import { PrepaymentsHomeModule } from './home/home.module';
import { PrepaymentsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { BespokeModule } from './bespoke/bespoke.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  imports: [
    BrowserModule,
    PrepaymentsSharedModule,
    PrepaymentsCoreModule,
    PrepaymentsHomeModule,
    BespokeModule,
    LoggerModule.forRoot({ serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }),
    // jhipster-needle-angular-add-module JHipster will add new module here
    PrepaymentsEntityModule,
    PrepaymentsAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class PrepaymentsAppModule {}
