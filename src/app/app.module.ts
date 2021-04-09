import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SuperposeComponent} from './superpose/superpose.component';
import {MatDialogModule} from '@angular/material';
import { MolstarDialogComponent } from './molstar-dialog/molstar-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperposeComponent,
    MolstarDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
