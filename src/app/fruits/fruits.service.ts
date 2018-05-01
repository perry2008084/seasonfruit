import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FruitsService {
  url = "assets/server/fruits.json";

  constructor(private http: HttpClient) { }

  getFruits() {
    return this.http.get(this.url);
  }
}
