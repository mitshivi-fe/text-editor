import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEventSectionComponent } from './text-event-section.component';

describe('TextEventSectionComponent', () => {
  let component: TextEventSectionComponent;
  let fixture: ComponentFixture<TextEventSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEventSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEventSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
