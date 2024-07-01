import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAboutComponent } from './library-about.component';

describe('LibraryAboutComponent', () => {
  let component: LibraryAboutComponent;
  let fixture: ComponentFixture<LibraryAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
