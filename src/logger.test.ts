import Log from './logger';

describe('Logger', () => {
  const originalWrite = process.stdout.write;
  let logger;
  const writeMock = jest.fn();

  beforeEach(() => {
    process.stdout.write = writeMock;
    logger = new Log();
  });

  afterEach(() => {
    writeMock.mockReset();
    process.stdout.write = originalWrite;
  });

  it('should log msg of type ', () => {
    logger.info('hello');

    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ msg: 'hello', level: 'INFO' }) + '\n'
    );
    writeMock.mockReset();

    logger.warn('hallo');
    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ msg: 'hallo', level: 'WARN' }) + '\n'
    );

    writeMock.mockReset();
    logger.error('ciao');
    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ msg: 'ciao', level: 'ERROR' }) + '\n'
    );

    writeMock.mockReset();
    logger.warn('salut');
    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ msg: 'salut', level: 'WARN' }) + '\n'
    );
    writeMock.mockReset();
  });

  it('should provide fields by method call', () => {
    logger.info('salut', { extraField: 'value' });
    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ msg: 'salut', level: 'INFO', extraField: 'value' }) +
        '\n'
    );
  });

  it('should provide default fields when instantiation', () => {
    const loggerWithDefaultFields = new Log({ extraField: 'value' });
    loggerWithDefaultFields.info('salut');
    expect(writeMock).toHaveBeenCalledTimes(1);
    expect(writeMock).toHaveBeenCalledWith(
      JSON.stringify({ extraField: 'value', msg: 'salut', level: 'INFO' }) +
        '\n'
    );
  });
});
