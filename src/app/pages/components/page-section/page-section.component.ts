import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss']
})
export class PageSectionComponent implements OnInit {
  @Input() sectionNumber: number;
  @Input() page: string;
  
  public red: number;
  public blue: number;
  public green: number;

  public backgroundStyle: string;

  constructor() { }

  ngOnInit(): void {
    this.red = Math.floor(Math.random() * 255);
    this.blue = Math.floor(Math.random() * 255);
    this.green = Math.floor(Math.random() * 255);

    this.backgroundStyle = `backgroundColor: rgb(${this.red}, ${this.blue}, ${this.green})`
  }


}
