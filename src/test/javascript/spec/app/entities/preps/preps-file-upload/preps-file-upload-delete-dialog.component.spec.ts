import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { PrepaymentsTestModule } from '../../../../test.module';
import { MockEventManager } from '../../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../../helpers/mock-active-modal.service';
import { PrepsFileUploadDeleteDialogComponent } from 'app/entities/preps/preps-file-upload/preps-file-upload-delete-dialog.component';
import { PrepsFileUploadService } from 'app/entities/preps/preps-file-upload/preps-file-upload.service';

describe('Component Tests', () => {
  describe('PrepsFileUpload Management Delete Component', () => {
    let comp: PrepsFileUploadDeleteDialogComponent;
    let fixture: ComponentFixture<PrepsFileUploadDeleteDialogComponent>;
    let service: PrepsFileUploadService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [PrepaymentsTestModule],
        declarations: [PrepsFileUploadDeleteDialogComponent],
      })
        .overrideTemplate(PrepsFileUploadDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PrepsFileUploadDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PrepsFileUploadService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
