import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

  doGet(selectedTopic: string = 'technology', selectedCountry: string = 'us') {
    const apiKey = '0ce9a49406b14025800174b3fef325b3';
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 5); //- 5 dni
    const formattedDate = currentDate.toISOString().split('T')[0]; // Get today's date in ISO format

    //const apiUrl = `https://newsapi.org/v2/top-headlines?q=${selectedTopic}&from=${formattedDate}&country=${selectedCountry}&apiKey=${apiKey}`;

    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedTopic}&apiKey=${apiKey}`;


    const options = {
      url: apiUrl,
      //params: { size: 'XL' },
    };

    return from(Http.get(options));
  }
  getArticleDetails(title: string) {
    const apiKey = '0ce9a49406b14025800174b3fef325b3';
    const apiUrl = `https://newsapi.org/get-article-details?title=${title}&apiKey=${apiKey}`;

    const options = {
      url: apiUrl,
    };

    return from(Http.get(options));
  }

}
