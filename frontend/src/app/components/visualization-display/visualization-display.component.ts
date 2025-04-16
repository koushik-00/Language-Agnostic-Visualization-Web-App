import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-visualization-display',
  standalone: false,
  templateUrl: './visualization-display.component.html',
  styleUrl: './visualization-display.component.scss'
})
export class VisualizationDisplayComponent implements OnChanges {
  @Input() visualizationUrl: string = '';
  safeVisualizationUrl: SafeResourceUrl | null = null;

  

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visualizationUrl'] && this.visualizationUrl) {
      this.safeVisualizationUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.visualizationUrl);
      console.log("Raw URL:", this.visualizationUrl);
      console.log("Sanitized URL:", this.safeVisualizationUrl);
    }
  }

  isImage(url: string): boolean {
    return /\.(png|jpe?g|svg)$/i.test(url);
  }

  isHtml(url: string): boolean {
    return /\.html$/i.test(url);
  }
}
