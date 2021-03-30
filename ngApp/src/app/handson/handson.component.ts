import { Component, OnInit } from '@angular/core';
import { HandsonService } from '../handson.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-handson',
  templateUrl: './handson.component.html',
  styleUrls: ['./handson.component.css']
})

export class HandsonComponent implements OnInit {

  lst:any[] = []

  constructor(private http: HttpClient, private handsonService:HandsonService) { }

  ngOnInit(): void {
    this.handsonService.getData()
    .subscribe(
      res => this.lst = res,
      err => console.log(err)
    )
  }


  tableSettings: any = {
    // rowHeaders: true,
    // colHeaders: true,
    viewportColumnRenderingOffset: 27,
    viewportRowRenderingOffset: "auto",
    //colWidths: 150,
    height: 450,
     allowInsertColumn: false,
     allowInsertRow: true,
    // allowRemoveColumn: false,
    // allowRemoveRow: false,
    // autoWrapRow: false,
    // autoWrapCol: false,
      stretchH: "all",
    // width: 1000 ,
    // autoWrapRow: true,
    // height: 487,
    // maxRows: 22,
    manualRowResize: true,
    // overflow: "hidden",   //Check if this is the right way or else use in CSS
    className: "htCenter",
    // className: "htMiddle",
    manualColumnResize: true,
    colHeaders : ["Edited","Name","Created","Gender","Skin Color","Hair Color", "Height","Eye Color","Mass","Home World","Birth Year"],
     rowHeaders: true,

    columns:[
      {data:'edited'},
      {data:'name'},
      {data:'created'},
      {data:'gender'},
      {data:'skin_color'},
      {data:'hair_color'},
      {data:'height'},
      {data:'eye_color'},
      {data:'mass'},
      {data:'homeworld'},
      {data:'birth_year'},
      // {data:'model'},
      // {data:'pk'}
    ],

    manualRowMove: true,
    manualColumnMove: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
    // afterValidate: function(isValid, value, row, prop){
    //   if(value == false){
    //     console.log( value, row, prop)
    //     alert("Invalid")
        //Value = isValid
        // row = inserted invalid value
        //prop = row index changed
        // }
        // }
  }

  // detectChanges = (hotInstance, changes, source) => { console.log(changes); }

}
