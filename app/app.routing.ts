import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module'
import { HelloComponent } from './hello.component'
import { TestComponent } from './test.component'

export const AppRoutes: Routes = [
  { path: 'hello', component: HelloComponent, outlet: 'hello' },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: '**', component: HelloComponent }
]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true,
  enableTracing: true
})
