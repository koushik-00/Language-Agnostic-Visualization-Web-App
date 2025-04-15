import { Component, EventEmitter, Output } from '@angular/core';
import { VisualizationService } from '../../services/visualization.service';

@Component({
  selector: 'app-visualization-editor',
  standalone: false,
  templateUrl: './visualization-editor.component.html',
  styleUrl: './visualization-editor.component.scss'
})
export class VisualizationEditorComponent {
  selectedLanguage = 'python';
  code = '';
  isLoading = false;
  error = '';
  visualizationUrl = '';

  @Output() visualizationGenerated = new EventEmitter<string>();

  constructor(private visualizationService: VisualizationService) { }

  generateVisualization() {
    if (!this.code.trim()) {
      this.error = 'Please enter code to generate a visualization.';
      return;
    }

    this.isLoading = true;
    this.error = '';
    
    this.visualizationService.generateVisualization(this.selectedLanguage, this.code)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.visualizationUrl = response.visualizationUrl;
          // Emit event to parent component to display visualization
          this.visualizationGenerated.emit(this.visualizationUrl);
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error?.message || 'Failed to generate visualization. Please try again.';
        }
      });
  }
}
