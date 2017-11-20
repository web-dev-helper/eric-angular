import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostReactiveFormComponent } from './add-post-reactive-form.component';

describe('AddPostReactiveFormComponent', () => {
  let component: AddPostReactiveFormComponent;
  let fixture: ComponentFixture<AddPostReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
