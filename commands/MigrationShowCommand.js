"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationShowCommand = void 0;
var tslib_1 = require("tslib");
var globals_1 = require("../globals");
var ConnectionOptionsReader_1 = require("../connection/ConnectionOptionsReader");
var process = (0, tslib_1.__importStar)(require("process"));
var PlatformTools_1 = require("../platform/PlatformTools");
/**
 * Runs migration command.
 */
var MigrationShowCommand = /** @class */ (function () {
    function MigrationShowCommand() {
        this.command = "migration:show";
        this.describe = "Show all migrations and whether they have been run or not";
    }
    MigrationShowCommand.prototype.builder = function (args) {
        return args
            .option("connection", {
            alias: "c",
            default: "default",
            describe: "Name of the connection on which run a query."
        })
            .option("config", {
            alias: "f",
            default: "ormconfig",
            describe: "Name of the file with connection configuration."
        });
    };
    MigrationShowCommand.prototype.handler = function (args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var connection, connectionOptionsReader, connectionOptions, err_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connection = undefined;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 9]);
                        connectionOptionsReader = new ConnectionOptionsReader_1.ConnectionOptionsReader({
                            root: process.cwd(),
                            configName: args.config
                        });
                        return [4 /*yield*/, connectionOptionsReader.get(args.connection)];
                    case 2:
                        connectionOptions = _a.sent();
                        Object.assign(connectionOptions, {
                            subscribers: [],
                            synchronize: false,
                            migrationsRun: false,
                            dropSchema: false,
                            logging: ["query", "error", "schema"]
                        });
                        return [4 /*yield*/, (0, globals_1.createConnection)(connectionOptions)];
                    case 3:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.showMigrations()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, connection.close()];
                    case 5:
                        _a.sent();
                        process.exit(0);
                        return [3 /*break*/, 9];
                    case 6:
                        err_1 = _a.sent();
                        if (!connection) return [3 /*break*/, 8];
                        return [4 /*yield*/, connection.close()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        PlatformTools_1.PlatformTools.logCmdErr("Error during migration show:", err_1);
                        process.exit(1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return MigrationShowCommand;
}());
exports.MigrationShowCommand = MigrationShowCommand;

//# sourceMappingURL=MigrationShowCommand.js.map
