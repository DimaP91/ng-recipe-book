import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';


describe('Heder Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: DataStorageService },
        { provide: AuthService }
      ],
    });
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
