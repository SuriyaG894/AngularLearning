import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialdesignsComponent } from './materialdesigns.component';

describe('MaterialdesignsComponent', () => {
  let component: MaterialdesignsComponent;
  let fixture: ComponentFixture<MaterialdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
