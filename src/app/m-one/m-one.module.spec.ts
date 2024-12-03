import { MOneModule } from './m-one.module';

describe('MOneModule', () => {
  let mOneModule: MOneModule;

  beforeEach(() => {
    mOneModule = new MOneModule();
  });

  it('should create an instance', () => {
    expect(mOneModule).toBeTruthy();
  });
});
