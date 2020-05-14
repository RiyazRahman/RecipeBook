import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorage } from '../../shared/data-storage.service';
import { AuthenticationService } from '../../auth/auth.service';

@Component ({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorage,
                public authService: AuthenticationService) {}

    // @Output() featureSelected = new EventEmitter<string>();
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes()
        .subscribe(
            (response) => {
                console.log(response);
            }
        );
    }

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}
