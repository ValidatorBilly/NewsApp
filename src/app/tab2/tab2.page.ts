import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  selectedArticleTitle?: string; // Optional parameter

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetdataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const title = params.get('articleTitle');
      if (title !== null) {
        this.selectedArticleTitle = title; // Assign only if title is not null
        // Fetch the details of the article based on the title
        this.getDataService.getArticleDetails(this.selectedArticleTitle!).subscribe((article: any) => {
          this.selectedArticleTitle = article;
        });
      } else {
        // Handle the case where title is null (optional)
      }
    });
  }
}
