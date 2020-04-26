import { NotFoundComponent } from './error/not-found.component';
import { InternalErrorComponent } from './error/internal-error.component';
import { HttpErrorInterceptor } from './error/http-error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserReducer } from './user/store/reducers/user.reducers';
import { UserEffect } from './user/store/effects/user.effects';
import { CreateUserReducer } from './user/store/reducers/create-user.reducers';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    CreateUserComponent,
    InternalErrorComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      user: UserReducer,
      createUser: CreateUserReducer
    }),
    EffectsModule.forRoot([UserEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    IconsProviderModule,
    NgZorroAntdModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
