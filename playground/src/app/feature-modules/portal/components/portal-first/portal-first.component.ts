import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-portal-first',
  templateUrl: './portal-first.component.html',
  styleUrls: ['./portal-first.component.scss']
})
export class PortalFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public onFirst(): void {
        console.log('First clicked!')
    }

}
