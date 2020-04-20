"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "INFO";
    LogLevel["Warn"] = "WARN";
    LogLevel["Error"] = "ERROR";
    LogLevel["Debug"] = "DEBUG";
})(LogLevel || (LogLevel = {}));
class Log {
    constructor(fields) {
        this.defaultFields = fields;
    }
    write(level, msg, fields) {
        process.stdout.write(JSON.stringify(Object.assign({}, this.defaultFields, Object.assign({ msg: msg, level: level }, fields))) + '\n');
    }
    info(msg, fields) {
        this.write(LogLevel.Info, msg, fields);
    }
    warn(msg, fields) {
        this.write(LogLevel.Warn, msg, fields);
    }
    error(msg, fields) {
        this.write(LogLevel.Error, msg, fields);
    }
    debug(msg, fields) {
        this.write(LogLevel.Debug, msg, fields);
    }
}
const create = (fields) => {
    return new Log(fields);
};
exports.default = create;
