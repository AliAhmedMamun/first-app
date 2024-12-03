import { MTwoModule } from './m-two.module';

describe('MTwoModule', () => {
  let mTwoModule: MTwoModule;

  beforeEach(() => {
    mTwoModule = new MTwoModule();
  });

  it('should create an instance', () => {
    expect(mTwoModule).toBeTruthy();
  });
});
