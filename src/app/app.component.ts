import { Component, OnInit } from '@angular/core';
import { FruitsService } from './fruits/fruits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  monthData:any;

  constructor(private fruitService:FruitsService) {}

  ngOnInit() {
    this.fruitService.getFruits()
      .subscribe(data => {
        this.monthData = data;
        console.log(this.monthData);
      });
  }
}
