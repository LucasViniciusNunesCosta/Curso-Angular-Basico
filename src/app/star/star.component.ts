import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()
  ratting: number = 0;

  starWidth: number = 0;

  color: string = "#F1C40F";

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.ratting *94 /5;
  }

}
