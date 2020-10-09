import { Component, OnInit } from '@angular/core';
import { TechsService } from '../../../services/techs/techs.service';

@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent implements OnInit {

  techsAll: Array<any> = [];

  constructor(private techsService: TechsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.techsService.getAll().subscribe((techs) => {
      this.techsAll = techs;
      console.log(this.techsAll);
    },
      (error) => {
        console.warn('error no hay categorias =>', error);
      });
  }

}
