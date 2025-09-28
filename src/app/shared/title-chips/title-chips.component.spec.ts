import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleChipsComponent } from './title-chips.component';

describe('TitleChipsComponent', () => {
  let component: TitleChipsComponent;
  let fixture: ComponentFixture<TitleChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
