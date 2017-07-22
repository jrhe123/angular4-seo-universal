import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


const appRoutes = [
	{path: "", component: HomeComponent},
	{path: "about", component: AboutComponent},
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent
	],
	imports: [
		// SEO settins
		BrowserModule.withServerTransition({appId:"ng4-seo"}),
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
