"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetterSqlite3QueryRunner = void 0;
var tslib_1 = require("tslib");
var QueryRunnerAlreadyReleasedError_1 = require("../../error/QueryRunnerAlreadyReleasedError");
var QueryFailedError_1 = require("../../error/QueryFailedError");
var AbstractSqliteQueryRunner_1 = require("../sqlite-abstract/AbstractSqliteQueryRunner");
var Broadcaster_1 = require("../../subscriber/Broadcaster");
var QueryResult_1 = require("../../query-runner/QueryResult");
/**
 * Runs queries on a single sqlite database connection.
 *
 * Does not support compose primary keys with autoincrement field.
 * todo: need to throw exception for this case.
 */
var BetterSqlite3QueryRunner = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(BetterSqlite3QueryRunner, _super);
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function BetterSqlite3QueryRunner(driver) {
        var _this = _super.call(this) || this;
        _this.stmtCache = new Map();
        _this.driver = driver;
        _this.connection = driver.connection;
        _this.broadcaster = new Broadcaster_1.Broadcaster(_this);
        if (typeof _this.driver.options.statementCacheSize === "number") {
            _this.cacheSize = _this.driver.options.statementCacheSize;
        }
        else {
            _this.cacheSize = 100;
        }
        return _this;
    }
    BetterSqlite3QueryRunner.prototype.getStmt = function (query) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var stmt, databaseConnection, key, databaseConnection;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.cacheSize > 0)) return [3 /*break*/, 3];
                        stmt = this.stmtCache.get(query);
                        if (!!stmt) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connect()];
                    case 1:
                        databaseConnection = _a.sent();
                        stmt = databaseConnection.prepare(query);
                        this.stmtCache.set(query, stmt);
                        while (this.stmtCache.size > this.cacheSize) {
                            key = this.stmtCache.keys().next().value;
                            this.stmtCache.delete(key);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, stmt];
                    case 3: return [4 /*yield*/, this.connect()];
                    case 4:
                        databaseConnection = _a.sent();
                        return [2 /*return*/, databaseConnection.prepare(query)];
                }
            });
        });
    };
    /**
<<<<<<< HEAD
=======
     * Called before migrations are run.
     */
    BetterSqlite3QueryRunner.prototype.beforeMigration = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query("PRAGMA foreign_keys = OFF")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Called after migrations are run.
     */
    BetterSqlite3QueryRunner.prototype.afterMigration = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query("PRAGMA foreign_keys = ON")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
>>>>>>> a3495c7 (INIT)
     * Executes a given SQL query.
     */
    BetterSqlite3QueryRunner.prototype.query = function (query, parameters, useStructuredResult) {
        if (useStructuredResult === void 0) { useStructuredResult = false; }
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var connection, i, queryStartTime, stmt, result, raw, raw, maxQueryExecutionTime, queryEndTime, queryExecutionTime;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isReleased)
                            throw new QueryRunnerAlreadyReleasedError_1.QueryRunnerAlreadyReleasedError();
                        connection = this.driver.connection;
                        parameters = parameters || [];
                        for (i = 0; i < parameters.length; i++) {
                            // in "where" clauses the parameters are not escaped by the driver
                            if (typeof parameters[i] === "boolean")
                                parameters[i] = +parameters[i];
                        }
                        this.driver.connection.logger.logQuery(query, parameters, this);
                        queryStartTime = +new Date();
                        return [4 /*yield*/, this.getStmt(query)];
                    case 1:
                        stmt = _a.sent();
                        try {
                            result = new QueryResult_1.QueryResult();
                            if (stmt.reader) {
                                raw = stmt.all.apply(stmt, parameters);
                                result.raw = raw;
                                if (Array.isArray(raw)) {
                                    result.records = raw;
                                }
                            }
                            else {
                                raw = stmt.run.apply(stmt, parameters);
                                result.affected = raw.changes;
                                result.raw = raw.lastInsertRowid;
                            }
                            maxQueryExecutionTime = this.driver.options.maxQueryExecutionTime;
                            queryEndTime = +new Date();
                            queryExecutionTime = queryEndTime - queryStartTime;
                            if (maxQueryExecutionTime && queryExecutionTime > maxQueryExecutionTime)
                                connection.logger.logQuerySlow(queryExecutionTime, query, parameters, this);
                            if (!useStructuredResult) {
                                return [2 /*return*/, result.raw];
                            }
                            return [2 /*return*/, result];
                        }
                        catch (err) {
                            connection.logger.logQueryError(err, query, parameters, this);
                            throw new QueryFailedError_1.QueryFailedError(query, parameters, err);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
<<<<<<< HEAD
=======
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    BetterSqlite3QueryRunner.prototype.loadTableRecords = function (tablePath, tableOrIndex) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, database, tableName, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, tslib_1.__read)(this.splitTablePath(tablePath), 2), database = _a[0], tableName = _a[1];
                        return [4 /*yield*/, this.query("SELECT " + (database ? "'" + database + "'" : null) + " as database, * FROM " + this.escapePath((database ? database + "." : "") + "sqlite_master") + " WHERE \"type\" = '" + tableOrIndex + "' AND \"" + (tableOrIndex === "table" ? "name" : "tbl_name") + "\" IN ('" + tableName + "')")];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    BetterSqlite3QueryRunner.prototype.loadPragmaRecords = function (tablePath, pragma) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, database, tableName, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, tslib_1.__read)(this.splitTablePath(tablePath), 2), database = _a[0], tableName = _a[1];
                        return [4 /*yield*/, this.query("PRAGMA " + (database ? "\"" + database + "\"." : "") + pragma + "(\"" + tableName + "\")")];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
>>>>>>> a3495c7 (INIT)
    return BetterSqlite3QueryRunner;
}(AbstractSqliteQueryRunner_1.AbstractSqliteQueryRunner));
exports.BetterSqlite3QueryRunner = BetterSqlite3QueryRunner;

//# sourceMappingURL=BetterSqlite3QueryRunner.js.map
