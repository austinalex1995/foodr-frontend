import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeRecipeComponent } from './swipe-recipe.component';

describe('SwipeRecipeComponent', () => {
  let component: SwipeRecipeComponent;
  let fixture: ComponentFixture<SwipeRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
