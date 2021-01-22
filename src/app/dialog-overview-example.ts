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
  name: string = "Geús";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "800px",
      height: "600px",
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}
