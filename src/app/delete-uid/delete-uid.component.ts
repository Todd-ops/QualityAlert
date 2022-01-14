import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { MyDataService } from '../my-data.service'
import { FormInfo } from './formInfo'

@Component({
  selector: 'app-delete-uid',
  templateUrl: './delete-uid.component.html',
  styleUrls: ['./delete-uid.component.css']
})
export class DeleteUidComponent implements OnInit {
  @Input() uid: any;
  @Output() sendThis = new EventEmitter()
  public formInfo: any;
  public searchText: any;
  
  constructor(public service: MyDataService) { }

  ngOnInit() {
    this.service.getActiveQA()
    .subscribe(response => {
      this.formInfo = response;
      console.log(this.formInfo)
    });
  }

  

  // onClick(uid: any){
  //   this.sendThis.emit(uid)
  //   console.log('button clicked', uid)
  // }

  onClick(uid: any){
    this.sendThis.emit(uid)
    console.log('button clicked', uid)
  }

  

}
