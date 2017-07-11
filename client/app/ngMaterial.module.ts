
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

 import {
    MdNativeDateModule,
    // Form Controls
    MdAutocompleteModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    // Navigation
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    // Layout
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    // Buttons, Indicators, and Icons
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    // Popups and Modals
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule
 } from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MdNativeDateModule,
        MdAutocompleteModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdMenuModule,
        MdSidenavModule,
        MdToolbarModule,
        MdListModule,
        MdGridListModule,
        MdCardModule,
        MdTabsModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdChipsModule,
        MdIconModule,
        MdProgressSpinnerModule,
        MdProgressBarModule,
        MdDialogModule,
        MdTooltipModule,
        MdSnackBarModule,
    ],
    exports: [
        MdAutocompleteModule,
        MdCheckboxModule,
        MdDatepickerModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdMenuModule,
        MdSidenavModule,
        MdToolbarModule,
        MdListModule,
        MdGridListModule,
        MdCardModule,
        MdTabsModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdChipsModule,
        MdIconModule,
        MdProgressSpinnerModule,
        MdProgressBarModule,
        MdDialogModule,
        MdTooltipModule,
        MdSnackBarModule
    ],
})
export class AngularMaterialModule {}
