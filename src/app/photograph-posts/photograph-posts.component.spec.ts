import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographPostsComponent } from './photograph-posts.component';

describe('PhotographPostsComponent', () => {
  let component: PhotographPostsComponent;
  let fixture: ComponentFixture<PhotographPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
