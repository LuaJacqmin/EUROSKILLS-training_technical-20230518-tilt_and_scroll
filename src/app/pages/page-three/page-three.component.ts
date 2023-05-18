import { Component, OnInit } from '@angular/core';
import { AbstractPage } from '../abstract-page/abstract-page';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent extends AbstractPage implements OnInit {
  ngOnInit(): void {
    super.ngOnInit()
  }
}
