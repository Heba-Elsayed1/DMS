import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModalModule

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [NgbModalModule],  // Import NgbModalModule here
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  @Input() name: string = '';  // Folder name

  constructor(public activeModal: NgbActiveModal) {}  

  close() {
    this.activeModal.dismiss();  // Close the modal if user cancels
  }

  confirmDelete() {
    this.activeModal.close(true);  // Confirm deletion and close the modal
  }
}
