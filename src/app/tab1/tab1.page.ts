import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController
import { GetdataService } from '../getdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any[] = [];
  selectedTopic: string = 'technology'; // Default topic
  selectedCountry: string = 'us'; // Default country

  topicMappings: { [countryCode: string]: string[] } = {
    us: ['Technology', 'Business', 'Health', 'Science', 'Sports', 'Entertainment'],
    gb: ['Technology', 'Business', 'Health', 'Science', 'Sports', 'Entertainment'],
    sk: ['Technológia', 'Obchod', 'Zdravie', 'Veda', 'Šport', 'Zábava'],
    cz: ['Technologie', 'Obchod', 'Zdraví', 'Věda', 'Sport', 'Zábava'],
    ja: ['テクノロジー', 'ビジネス', '健康', '科学', 'スポーツ', 'エンターテイメント'],
    ru: ['Технологии', 'Бизнес', 'Здоровье', 'Наука', 'Спорт', 'Развлечения'],
};


  topics: string[] = [];

  constructor(
    private getDataService: GetdataService,
    private navCtrl: NavController, // Inject NavController
    private router: Router
  ) {}
  
  ngOnInit() {
    this.fetchNews();
    this.updateTopics();
  }

  fetchNews() {
    this.getDataService.doGet(this.selectedTopic, this.selectedCountry).subscribe((response: any) => {
      console.log('API Response:', response); // Log the response
      console.log(this.data);
      this.data = response.data.articles;
    });
  }

  applyFilters() {
    //Update topics
  
    this.fetchNews(); // Re-fetch news with selected filters
  }

  updateTopics() {
    this.topics = this.topicMappings[this.selectedCountry] || [];
  }

  // Function to open the article content page
  openArticle(newsUrl: string) {
    this.router.navigate(['tabs/tab2'], { queryParams: { url: newsUrl } });
  }

}
