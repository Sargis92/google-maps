import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ToGoListComponent } from './components/to-go-list/to-go-list.component';
import { MapsViewComponent } from './components/maps-view/maps-view.component';
import { AgmCoreModule } from '@agm/core';
import { PopupComponent } from './components/popup/popup.component';
import { FilterPipe } from './filter/filter.pipe';
import {TransformDataService} from './services/transform-data.service';



@NgModule({
  declarations: [
    AppComponent,
    ToGoListComponent,
    MapsViewComponent,
    PopupComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHjmLgQO5Czvz5iLEa2HWKOYtzIldguZw'
    })
  ],
  providers: [TransformDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
