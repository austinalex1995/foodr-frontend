import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSwipeComponent } from './recipe-swipe.component';

describe('RecipeSwipeComponent', () => {
  let component: RecipeSwipeComponent;
  let fixture: ComponentFixture<RecipeSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeSwipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
