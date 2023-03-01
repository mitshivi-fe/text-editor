import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'text-editor', loadChildren: ()=> import('./text-editor/text-editor.module').then(m=>m.TextEditorModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AppRoutingModule { }
