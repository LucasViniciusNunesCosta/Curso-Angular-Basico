import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: "full"
      },
      {
        path: 'courses', component: CoursesComponent
      },
      {
        path: '**', component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
