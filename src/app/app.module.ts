import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";
import {AppRouterModule} from "./app-router.module";
import {StudentFormComponent} from "./components/student-form/student-form.component";
import {StudentTableComponent} from "./components/student-table/student-table.component";
import {StudentService} from "./services/student.service";
import {StudentDetailsComponent} from "./components/student-details/student-details.component";

@NgModule({
    imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRouterModule
	],
    declarations: [
		AppComponent, StudentFormComponent,
		StudentTableComponent, StudentDetailsComponent
	],
	providers: [
		StudentService
	],
    bootstrap: [AppComponent]
})
export class AppModule {

}
