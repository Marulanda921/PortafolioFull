import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-spline-viewer',
  templateUrl: './spline-viewer.component.html',
  styleUrls: ['./spline-viewer.component.css']
})
export class SplineViewerComponent implements AfterViewInit {

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js';
    document.body.appendChild(script);
  }
}
