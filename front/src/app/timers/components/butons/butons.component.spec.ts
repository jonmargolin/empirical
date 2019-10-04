import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButonsComponent } from './butons.component';

describe('ButonsComponent', () => {
  let component: ButonsComponent;
  let fixture: ComponentFixture<ButonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
