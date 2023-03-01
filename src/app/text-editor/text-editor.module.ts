import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { TextEventSectionComponent } from './text-event-section/text-event-section.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: TextEditorComponent}
]

@NgModule({
  declarations: [
    TextEditorComponent,
    TextEventSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TextEditorModule { }
