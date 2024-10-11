import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spline-viewer',
  templateUrl: './spline-viewer.component.html',
  styleUrls: ['./spline-viewer.component.css']
})
export class SplineViewerComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js';
        script.async = true;
        document.body.appendChild(script);
        observer.disconnect();
      }
    });

    observer.observe(this.el.nativeElement);
  }
}
