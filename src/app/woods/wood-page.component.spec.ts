import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodPageComponent } from './wood-page.component';

describe('WoodPageComponent', () => {
  let component: WoodPageComponent;
  let fixture: ComponentFixture<WoodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
