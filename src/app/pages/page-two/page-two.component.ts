import { Component, OnInit } from '@angular/core';
import { AbstractPage } from '../abstract-page/abstract-page';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent extends AbstractPage implements OnInit {
  ngOnInit(): void {
    super.ngOnInit()
  }
}
