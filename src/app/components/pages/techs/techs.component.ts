import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechsService } from '../../../services/techs/techs.service';
import { Tech } from '../../../class/tech.interface';


@Component({
  selector: 'app-techs',
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.css']
})
export class TechsComponent implements OnInit {

  techsAll: Array<Tech> = [];

  searchTechs: any = '';

  sortDirection = 'asc';

  constructor(private techsService: TechsService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.techsService.getAll().subscribe((techs) => {
      this.techsAll = techs;

      console.log(this.techsAll);
    },
      (error) => {
        console.warn('error no hay tecnologias =>', error);
      });
  }

  onSortDirection(): void {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
  }


}
