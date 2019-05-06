import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule,
    MatSidenavModule, MatTabsModule, MatDividerModule, MatListModule, MatGridListModule,
    MatSelectModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({

    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatTabsModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule
    ],

    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSidenavModule,
        MatTabsModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule
    ],
})

export class CustomMaterialModule { }
