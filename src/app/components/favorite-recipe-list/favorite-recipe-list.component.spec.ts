import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRecipeListComponent } from './favorite-recipe-list.component';

describe('FavoriteRecipeListComponent', () => {
  let component: FavoriteRecipeListComponent;
  let fixture: ComponentFixture<FavoriteRecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteRecipeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
