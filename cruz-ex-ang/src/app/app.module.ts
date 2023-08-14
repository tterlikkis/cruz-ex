import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { UserCardComponent } from './user-card/user-card.component';
import { HeaderCardComponent } from './header-card/header-card.component';
import { AgeGroupComponent } from './age-group/age-group.component';
import { GroupHandlerComponent } from './group-handler/group-handler.component';
import { ViewModalComponent } from './view-modal/view-modal.component';
import { AvatarComponent } from './avatar/avatar.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { SmallUserCardComponent } from './small-user-card/small-user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    EditModalComponent,
    UserCardComponent,
    HeaderCardComponent,
    AgeGroupComponent,
    SmallUserCardComponent,
    ViewModalComponent,
    GroupHandlerComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
