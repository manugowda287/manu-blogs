import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsPostsComponent } from './recents-posts.component';

describe('RecentsPostsComponent', () => {
  let component: RecentsPostsComponent;
  let fixture: ComponentFixture<RecentsPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentsPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
