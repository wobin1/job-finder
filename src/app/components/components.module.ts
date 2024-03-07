import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [JobComponent]
})
export class ComponentsModule { }
