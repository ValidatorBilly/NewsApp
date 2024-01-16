import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  newsUrl: SafeResourceUrl = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer // Inject DomSanitizer
  ) {}
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const newsUrl = params['url'] || '';
      this.newsUrl = this.sanitizeUrl(newsUrl); // Sanitize the URL
    });
  }

  // Sanitize the URL using DomSanitizer
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
