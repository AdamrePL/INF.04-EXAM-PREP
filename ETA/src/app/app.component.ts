import { Component } from '@angular/core';
import { BOOKMGMTComponent } from './book-mgmt/book-mgmt.component';
import { DIETPLANComponent } from './diet-plan/diet-plan.component';
import { FAQACCORDIONComponent } from "./faq-accordion/faq-accordion.component";
import { FEEDBACKFORMCOUNTERComponent } from "./feedback-form-counter/feedback-form-counter.component";
import { MovieWatchlistComponent } from "./movie-watchlist/movie-watchlist.component";
import { PARKINGMETERComponent } from "./parking-meter/parking-meter.component";
import { TABSNAVPILLSComponent } from "./tabs-nav-pills/tabs-nav-pills.component";
import { QUIZMAKERComponent } from "./quiz-maker/quiz-maker.component";
import { SINGLEANSWERQUIZComponent } from "./single-answer-quiz/single-answer-quiz.component";
import { SORTABLETABLEComponent } from "./sortable-table/sortable-table.component";
import { CONTROLLEDUNCONTROLLEDTOGGLEComponent } from "./controlled-uncontrolled-toggle/controlled-uncontrolled-toggle.component";
import { CourseWaitlistCapacityComponent } from "./course-waitlist-capacity/course-waitlist-capacity";
import { APPOINTMENTPICKERComponent } from "./appointment-picker/appointment-picker.component";
import { PAGINATIONDEMOComponent } from "./pagination-demo/pagination-demo.component";
import { EXPENSETRACKComponent } from './expense-track/expense-track.component';
import { STARRATINGWIDGETComponent } from './star-rating-widget/star-rating-widget.component';
import { STOPWATCHComponent } from "./stopwatch/stopwatch.component";
import { TWOSTEPFORMComponent } from './two-step-form/two-step-form.component';
import { DEPENDENTDROPDOWNSComponent } from './dependent-dropdowns/dependent-dropdowns.component';
import { KEYBOARDSHORTCUTSComponent } from "./keyboard-shortcuts/keyboard-shortcuts.component";
import { MINISHOPLINETOTALComponent } from "./mini-shop-line-total/mini-shop-line-total.component";
import { RANDOMQUOTEComponent } from "./random-quote/random-quote.component";
import { UNITCONVERTERComponent } from "./unit-converter/unit-converter.component";
import { VISUALBARLISTComponent } from "./visual-bar-list/visual-bar-list.component";
import { SEARCHABLELISTComponent } from "./searchable-list/searchable-list.component";
import { PREEGZAM2025Component } from "./preegzam-2025/preegzam-2025.component";
import { TODOWITHPRIORITYComponent } from "./todo-with-priority/todo-with-priority.component";

const COMPLEXITY_LEVEL_ONE = [
    BOOKMGMTComponent,
    DIETPLANComponent,
    FAQACCORDIONComponent,
    FEEDBACKFORMCOUNTERComponent,
    MovieWatchlistComponent,
    PARKINGMETERComponent,
    TABSNAVPILLSComponent,
    QUIZMAKERComponent,
    SINGLEANSWERQUIZComponent
];

const COMPLEXITY_LEVEL_TWO = [
    SORTABLETABLEComponent,
    CONTROLLEDUNCONTROLLEDTOGGLEComponent,
    CourseWaitlistCapacityComponent,
    APPOINTMENTPICKERComponent,
    PAGINATIONDEMOComponent,
    EXPENSETRACKComponent,
    STARRATINGWIDGETComponent,
    STOPWATCHComponent,
    TWOSTEPFORMComponent,
    DEPENDENTDROPDOWNSComponent,
    KEYBOARDSHORTCUTSComponent,
    MINISHOPLINETOTALComponent,
    RANDOMQUOTEComponent,
    UNITCONVERTERComponent,
    VISUALBARLISTComponent,
    SEARCHABLELISTComponent,
    TODOWITHPRIORITYComponent,
    PREEGZAM2025Component,
];

const COMPLEXITY_LEVEL_THREE = [

];

@Component({
  selector: 'app-root',
  imports: [COMPLEXITY_LEVEL_TWO[16]],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    constructor() {console.log(`Level One Tasks: ${COMPLEXITY_LEVEL_ONE.length},\nLevel Two Tasks: ${COMPLEXITY_LEVEL_TWO.length},\nLevel Three Tasks: ${COMPLEXITY_LEVEL_THREE.length}`)}
}
