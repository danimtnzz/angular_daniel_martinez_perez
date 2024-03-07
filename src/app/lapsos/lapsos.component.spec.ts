import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsosComponent } from './lapsos.component';

describe('LapsosComponent', () => {
  let component: LapsosComponent;
  let fixture: ComponentFixture<LapsosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapsosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
