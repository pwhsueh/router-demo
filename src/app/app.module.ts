import { HeroDetailComponent } from './heros/hero-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HeroDetailComponent }

// const appRoutes: Routes = [
// { path: 'crisis-center', component: CrisisListComponent },
// // { path: 'hero/:id',      component: HeroDetailComponent },
// {
// path: 'heroes',
// component: HeroListComponent,
// data: { title: 'Heroes List' }
// },
// { path: '',
// redirectTo: '/heroes',
// pathMatch: 'full'
// },
// { path: '**', component: PageNotFoundComponent }
// ];
@NgModule({
  declarations: [
    AppComponent,
    // HeroListComponent,
    PageNotFoundComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
