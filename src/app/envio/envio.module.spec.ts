import { EnvioModule } from './envio.module';

describe('EnvioModule', () => {
  let envioModule: EnvioModule;

  beforeEach(() => {
    envioModule = new EnvioModule();
  });

  it('should create an instance', () => {
    expect(envioModule).toBeTruthy();
  });
});
