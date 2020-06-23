enum LogLevel {
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Debug = 'DEBUG',
}

class Log {
  defaultFields: object;

  constructor(fields?: object) {
    this.defaultFields = fields;
  }

  write(level: LogLevel, msg: string, fields?: object): void {
    process.stdout.write(
      JSON.stringify(
        Object.assign({}, this.defaultFields, {
          msg: msg,
          level: level,
          ...fields,
        })
      ) + '\n'
    );
  }

  info(msg: string, fields?: object): void {
    this.write(LogLevel.Info, msg, fields);
  }

  warn(msg: string, fields?: object): void {
    this.write(LogLevel.Warn, msg, fields);
  }

  error(msg: string, fields?: object): void {
    this.write(LogLevel.Error, msg, fields);
  }

  debug(msg: string, fields?: object): void {
    this.write(LogLevel.Debug, msg, fields);
  }
}

const create = (fields?: object): Log => {
  return new Log(fields);
};

export default create;
