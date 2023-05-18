import { Component, OnInit } from '@angular/core';
import { AbstractPage } from '../abstract-page/abstract-page';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})

export class PageOneComponent extends AbstractPage implements OnInit {
  ngOnInit(): void {
    super.ngOnInit()
  }
}
