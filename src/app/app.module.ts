import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DataFormatComponent } from './data-format/data-format.component';
import { ResultDisplayComponent } from './result-display/result-display.component';
import { BannerComponent } from './dashboard/banner/banner.component';
import { PricesComponent } from './dashboard/prices/prices.component';
import { MatButton, MatButtonModule} from '@angular/material/button';
import { MatInput, MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { DasboardComponent } from './dashboard/dasboard.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './dashboard/content/content.component';
import { ReviewsComponent } from './dashboard/reviews/reviews.component';
import { FooterComponent } from './footer/footer.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { RegisterComponent } from './login/register/register.component';
import { MainComponent } from './login/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    DataFormatComponent,
    ResultDisplayComponent,
    BannerComponent,
    PricesComponent,  
    DasboardComponent,
    MenuComponent,
    ContentComponent,
    ReviewsComponent,
    FooterComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
