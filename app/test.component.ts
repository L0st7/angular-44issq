import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'test',
  template: `<h1 (click)="loadHello()">Hello test!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TestComponent  {
  @Input() name: string;

  constructor(private router: Router){

  }

  loadHello(){
    this.router.navigate([{ outlets: { hello: ['hello']}}]);
  }
}
