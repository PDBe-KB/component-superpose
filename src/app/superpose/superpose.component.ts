import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MolstarDialogComponent} from '../molstar-dialog/molstar-dialog.component';

@Component({
  selector: 'app-superpose',
  templateUrl: './superpose.component.html',
  styleUrls: ['./superpose.component.css']
})
export class SuperposeComponent {

  @Input() superposeModalData: any;
  @Input() label: string;
  @Input() tooltip: string;

  constructor(public dialog: MatDialog) {
  }

  openMolstarDialog() {

    const entries = [this.superposeModalData];

    const entryData = {
      entryList: entries,
      current: 0
    };

    this.dialog.open(MolstarDialogComponent,
      {
        disableClose: false,
        panelClass: 'molstarDialog',
        data: entryData
      }
    );

    return entryData;
  }

}
