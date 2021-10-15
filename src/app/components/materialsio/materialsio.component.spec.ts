import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsioComponent } from './materialsio.component';

describe('MaterialsioComponent', () => {
  let component: MaterialsioComponent;
  let fixture: ComponentFixture<MaterialsioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
