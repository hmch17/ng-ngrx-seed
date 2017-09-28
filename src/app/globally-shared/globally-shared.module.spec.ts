import { GloballySharedModule } from './globally-shared.module';

describe('GloballySharedModule', () => {
  let globallySharedModule: GloballySharedModule;

  beforeEach(() => {
    globallySharedModule = new GloballySharedModule();
  });

  it('should create an instance', () => {
    expect(globallySharedModule).toBeTruthy();
  });
});
