import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationEditorComponent } from './visualization-editor.component';

describe('VisualizationEditorComponent', () => {
  let component: VisualizationEditorComponent;
  let fixture: ComponentFixture<VisualizationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizationEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
