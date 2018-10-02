import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent {
  constructor( private dataStoregeService: DataStorageService,
               private authService: AuthService ) {}

  onSaveData() {
    this.dataStoregeService.storeRecipes()
      .subscribe(
        (response: HttpResponse<any>) => console.log(response)
      );
  }

  onLogout() {
    this.authService.logout();
  }

  onFetchData() {
    this.dataStoregeService.getRecipes();
  }
}
