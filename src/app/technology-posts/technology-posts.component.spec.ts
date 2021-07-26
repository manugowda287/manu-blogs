import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPostsComponent } from './technology-posts.component';

describe('TechnologyPostsComponent', () => {
  let component: TechnologyPostsComponent;
  let fixture: ComponentFixture<TechnologyPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
