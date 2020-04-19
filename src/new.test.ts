import Log from './index';

describe('Logger', () => {
  const originalWrite = process.stdout.write;
  let logger;
  const writeMock = jest.fn();

  beforeEach(() => {
    process.stdout.write = writeMock;
    logger = Log();
  });

  afterEach(() => {
    writeMock.mockReset();
    process.stdout.write = originalWrite;
  });

  it('should provide default fields when instantiation', () => {
    const loggerWithDefaultFields = Log({ extraField: 'value' });
    loggerWithDefaultFields.info('salut');
    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ extraField: 'value', msg: 'salut', level: 'INFO' }) +
        '\n'
    );
  });
});
