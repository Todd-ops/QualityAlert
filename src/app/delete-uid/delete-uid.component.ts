import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MyDataService } from '../my-data.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-delete-uid',
  templateUrl: './delete-uid.component.html',
  styleUrls: ['./delete-uid.component.css'],
})
export class DeleteUidComponent implements OnInit {
  @Input() uid: any;
  @Output() sendThis = new EventEmitter();
  public formInfo: any;
  public searchText: any;

  constructor(public service: MyDataService) {}

  ngOnInit() {
    this.service.getActiveQA().subscribe((response) => {
      this.formInfo = response;
      console.log(this.formInfo);
    });
  }

 
  onClick(uid: any) {
    // this.sendThis.emit(uid)
    // console.log('button clicked', uid)
    this.service.getQAStatusUpdate(uid).subscribe((response) => {
      this.uid = response;
      console.log(response);
    });
  }

  confirmBox(uid: any) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will be able to recover this file!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, keep it',
      timer: 10000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.getQAStatusUpdate(uid).subscribe((response) => {
          this.uid = response;
          console.log(response);
        });
        Swal.fire(
          'Removed!',
          'Your Quality Alert has been removed.',
          'success'
        ).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
        Swal.toggleTimer();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Quality Alert is safe :)', 'error');
      }
    });
  }
}
