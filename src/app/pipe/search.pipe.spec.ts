import { SearchPipe } from './search.pipe';
import { TechsService } from '../services/techs/techs.service';

describe('SearchPipe', () => {

  let techs = [
    { tech: 'Node', type: 'Back-End' },
    { tech: 'React', type: 'Front-End' },
    { tech: 'Vue', type: 'Front-End' },
    { tech: 'Ruby on Rails', type: 'Back-End' },
    { tech: 'iOS', type: 'Mobile' },
    { tech: 'Android', type: 'Mobile' },
    { tech: 'Angular', type: 'Front-End' },
    { tech: 'React Native', type: 'Mobile' },
    { tech: 'Springboot', type: 'Back-End' },
  ];

  const service = new TechsService(null);
  const pipe = new SearchPipe(service);

  it('Se debe crear la instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('Debe retornar 3 o mas tecnologias front', () => {
    const name = 'front';
    pipe.transform(techs, name);
    const res = techs.length;
    expect(res).toBeGreaterThanOrEqual(3);

  });


  it('Debe retornar 3 o mas tecnologias mobile', () => {
    const name = 'mobile';
    const res = pipe.transform(techs, name);

    expect(res).toEqual(
      [
        { tech: 'iOS', type: 'Mobile' },
        { tech: 'Android', type: 'Mobile' },
        { tech: 'React Native', type: 'Mobile' },
      ]
    );

  });


  it('Debe retornar todas las tecnologias', () => {
    const name = '';
    const res = pipe.transform(techs, name);
    expect(techs.length).toBe(9);
    expect(res).toEqual(
      [
        { tech: 'Node', type: 'Back-End' },
        { tech: 'React', type: 'Front-End' },
        { tech: 'Vue', type: 'Front-End' },
        { tech: 'Ruby on Rails', type: 'Back-End' },
        { tech: 'iOS', type: 'Mobile' },
        { tech: 'Android', type: 'Mobile' },
        { tech: 'Angular', type: 'Front-End' },
        { tech: 'React Native', type: 'Mobile' },
        { tech: 'Springboot', type: 'Back-End' },
      ]
    );

  });

});
