import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPostsComponent } from './music-posts.component';

describe('MusicPostsComponent', () => {
  let component: MusicPostsComponent;
  let fixture: ComponentFixture<MusicPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
