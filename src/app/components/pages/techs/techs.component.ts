import { Component, OnInit } from '@angular/core';
import { TechsService } from '../../../services/techs/techs.service';
import { Tech } from '../../../class/tech.interface';


@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent implements OnInit {

  techsAll: Tech[] = [];

  searchTechs: any = '';
  sortDirection = '';
  constructor(public techsService: TechsService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.techsService.getAll().subscribe((techs) => {
      this.techsService.numberTechs = techs.length;
      this.techsAll = techs;
    },
      (error) => {
        console.warn('error no hay tecnologias =>', error);
      });
  }

}
