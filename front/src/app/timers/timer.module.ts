import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContinerComponent } from './components/continer/continer.component';
import { ButonsComponent } from './components/butons/butons.component';
import { InputsComponent } from './components/inputs/inputs.component';



@NgModule({
	declarations: [
		ContinerComponent,
		ButonsComponent,
		InputsComponent
	],
	imports: [CommonModule, HttpClientModule],
	exports: [ContinerComponent]
})
export class TimerModule {}
