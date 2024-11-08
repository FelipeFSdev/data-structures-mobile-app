import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'data-structures',
    loadChildren: () => import('./data-structures/data-structures.module').then(m => m.DataStructuresPageModule)
  },
  {
    path: 'arrays',
    loadChildren: () => import('./arrays/arrays.module').then(m => m.ArraysPageModule)
  },
  {
    path: 'singly-linked-lists',
    loadChildren: () => import('./singly-linked-lists/singly-linked-lists.module').then(m => m.SinglyLinkedListsPageModule)
  },
  {
    path: 'stacks',
    loadChildren: () => import('./stacks/stacks.module').then(m => m.StacksPageModule)
  },
  {
    path: 'queues',
    loadChildren: () => import('./queues/queues.module').then(m => m.QueuesPageModule)
  },
  {
    path: 'insertion-sort',
    loadChildren: () => import('./insertion-sort/insertion-sort.module').then(m => m.InsertionSortPageModule)
  },
  {
    path: 'bubble-sort',
    loadChildren: () => import('./bubble-sort/bubble-sort.module').then(m => m.BubbleSortPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
