import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturePostsComponent } from './nature-posts.component';

describe('NaturePostsComponent', () => {
  let component: NaturePostsComponent;
  let fixture: ComponentFixture<NaturePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
