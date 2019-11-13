import { GeneroModule } from './genero.module';

describe('GeneroModule', () => {
  let generoModule: GeneroModule;

  beforeEach(() => {
    generoModule = new GeneroModule();
  });

  it('should create an instance', () => {
    expect(generoModule).toBeTruthy();
  });
});
