import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  /**
   * Consstructor
   */

  constructor(private elementRef: ElementRef) { }


  /**
   * Class Methods
   */

  ngAfterViewInit() {

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'sandybrown';

  }

}
