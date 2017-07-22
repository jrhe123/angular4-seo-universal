import { Component, OnInit } from '@angular/core';

// SEO
import { Meta, Title } from '@angular/platform-browser';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	// Inject
	constructor(
		private meta: Meta,
		private title: Title,
	) {

		title.setTitle("Roy about page");
		meta.addTags([
			{name: "author", content: "roy he"},
			{name: "keywords", content: "seo"},
			{name: "description", content: "github demo"},
		]);
	}


	ngOnInit() {
	}

}
