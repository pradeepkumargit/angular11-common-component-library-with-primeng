import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PksratifyComponent } from './pksratify.component';

describe('PksratifyComponent', () => {
  let component: PksratifyComponent;
  let fixture: ComponentFixture<PksratifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PksratifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PksratifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
