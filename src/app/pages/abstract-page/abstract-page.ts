import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export abstract class AbstractPage implements OnInit{
    public numberOfDiv: number[] = [1, 2, 3, 4, 5];
    constructor(){

    }

    ngOnInit(): void {     
    }
}
