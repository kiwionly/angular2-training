import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule } from '@angular/forms';
import { ContentComponent } from './components/content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { PipesPipe } from './pipes.pipe';
import { FormatPipe } from './format.pipe';
import { PostPageComponent } from './components/post-page/post-page.component';
import { AppRoutingModule } from './app-routing.modules';
import { CustomerListPageComponent } from './modules/customer/components/customer-list-page/customer-list-page.component';
import { CustomerDetailPageComponent } from './modules/customer/components/customer-detail-page/customer-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    PipesPipe,
    FormatPipe,
    PostPageComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
