enum LogLevel {
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Debug = 'DEBUG',
}

class Log {
  defaultFields: any;

  constructor(fields?: any) {
    this.defaultFields = fields;
  }

  write(level: LogLevel, msg: string, fields?: any) {
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

  info(msg: string, fields?: any) {
    this.write(LogLevel.Info, msg, fields);
  }

  warn(msg: string, fields?: any) {
    this.write(LogLevel.Warn, msg, fields);
  }

  error(msg: string, fields?: any) {
    this.write(LogLevel.Error, msg, fields);
  }

  debug(msg: string, fields?: any) {
    this.write(LogLevel.Debug, msg, fields);
  }
}

export default Log;
