import { OrderNamePipe } from './order-name.pipe';

describe('OrderNamePipe', () => {

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

  const pipe = new OrderNamePipe();
  it('Deberia crear la instancia', () => {
    expect(pipe).toBeTruthy();
  });


  it('Debe retornar las 9 tecnolgias de forma descendente', () => {

    const name = 'desc';
    const res = pipe.transform(techs, name);

    expect(res).toEqual([
      { tech: 'Node', type: 'Back-End' },
      { tech: 'React', type: 'Front-End' },
      { tech: 'Vue', type: 'Front-End' },
      { tech: 'Ruby on Rails', type: 'Back-End' },
      { tech: 'iOS', type: 'Mobile' },
      { tech: 'Android', type: 'Mobile' },
      { tech: 'Angular', type: 'Front-End' },
      { tech: 'React Native', type: 'Mobile' },
      { tech: 'Springboot', type: 'Back-End' }
    ]);
  });

});
