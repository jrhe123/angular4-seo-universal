import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	// Inject
	constructor(
		private meta: Meta,
		private title: Title,
	) {

		title.setTitle("Roy home page");
		meta.addTags([
			{name: "author", content: "roy he"},
			{name: "keywords", content: "angular4"},
			{name: "description", content: "seo demo"},
		]);
	}

	ngOnInit() {
	}

}
