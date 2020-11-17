import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [GithubComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class GithubModule { }
