import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { ConnectionService} from './services/connection.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// import { D3Service, D3_DIRECTIVES } from './d3';

import { AppComponent } from './app.component';
import { graphReducer } from './state/graph.reducer';
import { GraphCanvasComponent } from './components/graph-canvas/graph-canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    GraphCanvasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ graph: graphReducer }),
	  StoreDevtoolsModule.instrument(),
  ],
  providers: [
    ConnectionService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
