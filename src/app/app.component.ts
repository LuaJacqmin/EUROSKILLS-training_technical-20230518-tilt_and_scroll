import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isScrolling: boolean = false;
  private YScrollPosition: number = 0;

  constructor(){

  }

  ngOnInit(){
    window.addEventListener("deviceorientation", e => {
      
      if(!this.isScrolling){
          if(e.beta < 75){
              this.isScrolling = true;
              this.YScrollPosition += (window.innerHeight / 100) * 80

              this.YScrollPosition > document.body.scrollHeight
                && (this.YScrollPosition = document.body.scrollHeight);
          } else if (e.beta > 105){
              this.isScrolling = true;
              this.YScrollPosition -= (window.innerHeight / 100) * 80

              this.YScrollPosition < 0
                && (this.YScrollPosition = 0);
          }

          window.scrollTo({
              top: this.YScrollPosition,
              left: 0,
              behavior: "smooth"
          })
          
          setTimeout(() => {
              this.isScrolling = false;
          }, 1000);
      }
  })
  }
}

