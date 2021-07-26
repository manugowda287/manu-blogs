import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPluginsComponent } from './social-plugins.component';

describe('SocialPluginsComponent', () => {
  let component: SocialPluginsComponent;
  let fixture: ComponentFixture<SocialPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialPluginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
