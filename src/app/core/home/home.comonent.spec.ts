import { HomeComponent } from './home.component';

import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('Home component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let h2: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display title', () => {
    fixture.detectChanges();
    expect(h2.textContent).toContain(component.title);
  });
});
