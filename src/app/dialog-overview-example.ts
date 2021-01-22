import { Component, Inject, ViewEncapsulation } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DialogOverviewExampleDialog } from "./dialog-overview-example-dialog";

@Component({
  selector: "dialog-overview-example",
  templateUrl: "dialog-overview-example.html",
  styleUrls: ["dialog-overview-example.css"],
  encapsulation: ViewEncapsulation.None
})
export class DialogOverviewExample {
  animal: string;
  name: string = 'Geús';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "800px",
      height: "400px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
