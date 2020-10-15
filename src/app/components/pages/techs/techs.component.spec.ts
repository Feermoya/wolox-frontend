import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsComponent } from './techs.component';

import { OrderNamePipe } from '../../../pipe/order-name.pipe';
import { SearchPipe } from '../../../pipe/search.pipe';
import { TechsService } from '../../../services/techs/techs.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';


describe('TechsComponent', () => {

  let component: TechsComponent;
  let fixture: ComponentFixture<TechsComponent>;
  const service = new TechsService(null);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechsComponent, OrderNamePipe, SearchPipe],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [TechsService]
    });
  });

  beforeEach(() => {
    component = new TechsComponent(service);
  });

  it('Debe Crearse el compotente Techs', () => {
    expect(component).toBeTruthy();
  });

  it('Init: debe traer las tecnologias del servicio', () => {
    const techs = [
      {
        tech: 'Android',
        year: '2008',
        author: 'Google',
        license: 'Apache',
        language: 'Java, Kotlin',
        type: 'Mobile',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Android_robot_2014.svg/75px-Android_robot_2014.svg.png'
      },
      {
        tech: 'Angular',
        year: '2016',
        author: 'Google',
        license: 'MIT',
        language: 'TypeScript',
        type: 'Front-End',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
      }
    ]

    spyOn(service, 'getAll').and.callFake(() => {
      return from([techs]);
    });
    component.ngOnInit();
    const res = component.techsAll.length;
    expect(res).toBeGreaterThan(0);

  });

});
