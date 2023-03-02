import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'text-editor', 
  loadChildren: ()=> import('./text-editor/text-editor.module').then(m=>m.TextEditorModule)
},
{
  path: '',
  redirectTo: '/text-editor',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
