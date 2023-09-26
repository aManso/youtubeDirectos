import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';

describe('ChannelComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent]
    });
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
