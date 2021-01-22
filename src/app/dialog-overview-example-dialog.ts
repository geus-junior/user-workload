import { Time } from "@angular/common";
import { Component, Inject, ViewEncapsulation } from "@angular/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  name: string;
}

export interface PeriodicElement {
  day_week: string;
  start_time: Date;
  end_time: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { day_week: "Domingo", start_time: new Date(), end_time: new Date() },
  { day_week: "Segunda-feira", start_time: new Date(), end_time: new Date() },
  { day_week: "Terça-feira", start_time: new Date(), end_time: new Date() },
  { day_week: "Quarta-feira", start_time: new Date(), end_time: new Date() },
  { day_week: "Quinta-feira", start_time: new Date(), end_time: new Date() },
  { day_week: "Sexta-feira", start_time: new Date(), end_time: new Date() },
  { day_week: "Sábado", start_time: new Date(), end_time: new Date() }
];

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html",
  styleUrls: ["dialog-overview-example-dialog.css"],
  encapsulation: ViewEncapsulation.None
})
export class DialogOverviewExampleDialog {
  displayedColumns: string[] = [
    "day_week",
    "start_time",
    "end_time",
    "workload",
    "delete"
  ];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getWorkload(start_time: Date, end_time: Date): number {
    let data1 = new Date(start_time);
    let data2 = new Date(end_time);
    var diferenca = Math.abs(data1.getTime() - data2.getTime()); //diferença em milésimos e positivo
    var dia = 1000 * 60 * 60 * 24; // milésimos de segundo correspondente a um dia
    var total = Math.round(diferenca / dia); //valor total de dias arredondado
    var emHoras = Math.round(total * 24); // valor total em Horas

    return emHoras;
  }
}
