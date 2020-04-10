import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiSeparatorComponent } from './emoji-separator.component';

describe('EmojiSeparatorComponent', () => {
  let component: EmojiSeparatorComponent;
  let fixture: ComponentFixture<EmojiSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
