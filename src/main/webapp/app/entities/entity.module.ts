import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'amortization-entry',
        loadChildren: () => import('./amortization-entry/amortization-entry.module').then(m => m.PrepaymentsAmortizationEntryModule),
      },
      {
        path: 'prepayment-entry',
        loadChildren: () => import('./prepayment-entry/prepayment-entry.module').then(m => m.PrepaymentsPrepaymentEntryModule),
      },
      {
        path: 'prepayment-data',
        loadChildren: () => import('./prepayment-data/prepayment-data.module').then(m => m.PrepaymentsPrepaymentDataModule),
      },
      {
        path: 'preps-file-type',
        loadChildren: () => import('./preps/preps-file-type/preps-file-type.module').then(m => m.PrepaymentsPrepsFileTypeModule),
      },
      {
        path: 'preps-file-upload',
        loadChildren: () => import('./preps/preps-file-upload/preps-file-upload.module').then(m => m.PrepaymentsPrepsFileUploadModule),
      },
      {
        path: 'compilation-request',
        loadChildren: () =>
          import('./compilation/compilation-request/compilation-request.module').then(m => m.PrepaymentsCompilationRequestModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class PrepaymentsEntityModule {}
