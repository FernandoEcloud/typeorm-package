"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var tslib_1 = require("tslib");
var DefaultNamingStrategy_1 = require("../naming-strategy/DefaultNamingStrategy");
var CannotExecuteNotConnectedError_1 = require("../error/CannotExecuteNotConnectedError");
var CannotConnectAlreadyConnectedError_1 = require("../error/CannotConnectAlreadyConnectedError");
var EntityMetadataNotFoundError_1 = require("../error/EntityMetadataNotFoundError");
var MigrationExecutor_1 = require("../migration/MigrationExecutor");
var MongoDriver_1 = require("../driver/mongodb/MongoDriver");
var MongoEntityManager_1 = require("../entity-manager/MongoEntityManager");
var EntityMetadataValidator_1 = require("../metadata-builder/EntityMetadataValidator");
var QueryRunnerProviderAlreadyReleasedError_1 = require("../error/QueryRunnerProviderAlreadyReleasedError");
var EntityManagerFactory_1 = require("../entity-manager/EntityManagerFactory");
var DriverFactory_1 = require("../driver/DriverFactory");
var ConnectionMetadataBuilder_1 = require("./ConnectionMetadataBuilder");
var SelectQueryBuilder_1 = require("../query-builder/SelectQueryBuilder");
var LoggerFactory_1 = require("../logger/LoggerFactory");
var QueryResultCacheFactory_1 = require("../cache/QueryResultCacheFactory");
var SqljsEntityManager_1 = require("../entity-manager/SqljsEntityManager");
var RelationLoader_1 = require("../query-builder/RelationLoader");
var EntitySchema_1 = require("../entity-schema/EntitySchema");
var SqlServerDriver_1 = require("../driver/sqlserver/SqlServerDriver");
var MysqlDriver_1 = require("../driver/mysql/MysqlDriver");
var ObjectUtils_1 = require("../util/ObjectUtils");
var AuroraDataApiDriver_1 = require("../driver/aurora-data-api/AuroraDataApiDriver");
var TypeORMError_1 = require("../error/TypeORMError");
/**
 * Connection is a single database ORM connection to a specific database.
 * Its not required to be a database connection, depend on database type it can create connection pool.
 * You can have multiple connections to multiple databases in your application.
 */
var Connection = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Connection(options) {
        /**
         * Migration instances that are registered for this connection.
         */
        this.migrations = [];
        /**
         * Entity subscriber instances that are registered for this connection.
         */
        this.subscribers = [];
        /**
         * All entity metadatas that are registered for this connection.
         */
        this.entityMetadatas = [];
        this.name = options.name || "default";
        this.options = options;
        this.logger = new LoggerFactory_1.LoggerFactory().create(this.options.logger, this.options.logging);
        this.driver = new DriverFactory_1.DriverFactory().create(this);
        this.manager = this.createEntityManager();
        this.namingStrategy = options.namingStrategy || new DefaultNamingStrategy_1.DefaultNamingStrategy();
        this.metadataTableName = options.metadataTableName || "typeorm_metadata";
        this.queryResultCache = options.cache ? new QueryResultCacheFactory_1.QueryResultCacheFactory(this).create() : undefined;
        this.relationLoader = new RelationLoader_1.RelationLoader(this);
        this.isConnected = false;
    }
    Object.defineProperty(Connection.prototype, "mongoManager", {
        // -------------------------------------------------------------------------
        // Public Accessors
        // -------------------------------------------------------------------------
        /**
         * Gets the mongodb entity manager that allows to perform mongodb-specific repository operations
         * with any entity in this connection.
         *
         * Available only in mongodb connections.
         */
        get: function () {
            if (!(this.manager instanceof MongoEntityManager_1.MongoEntityManager))
                throw new TypeORMError_1.TypeORMError("MongoEntityManager is only available for MongoDB databases.");
            return this.manager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "sqljsManager", {
        /**
         * Gets a sql.js specific Entity Manager that allows to perform special load and save operations
         *
         * Available only in connection with the sqljs driver.
         */
        get: function () {
            if (!(this.manager instanceof SqljsEntityManager_1.SqljsEntityManager))
                throw new TypeORMError_1.TypeORMError("SqljsEntityManager is only available for Sqljs databases.");
            return this.manager;
        },
        enumerable: false,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Performs connection to the database.
     * This method should be called once on application bootstrap.
     * This method not necessarily creates database connection (depend on database type),
     * but it also can setup a connection pool with database to use.
     */
    Connection.prototype.connect = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var error_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isConnected)
                            throw new CannotConnectAlreadyConnectedError_1.CannotConnectAlreadyConnectedError(this.name);
                        // connect to the database via its driver
                        return [4 /*yield*/, this.driver.connect()];
                    case 1:
                        // connect to the database via its driver
                        _a.sent();
                        if (!this.queryResultCache) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.queryResultCache.connect()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        // set connected status for the current connection
                        ObjectUtils_1.ObjectUtils.assign(this, { isConnected: true });
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 13, , 15]);
                        // build all metadatas registered in the current connection
                        return [4 /*yield*/, this.buildMetadatas()];
                    case 5:
                        // build all metadatas registered in the current connection
                        _a.sent();
                        return [4 /*yield*/, this.driver.afterConnect()];
                    case 6:
                        _a.sent();
                        if (!this.options.dropSchema) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.dropDatabase()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!this.options.synchronize) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.synchronize()];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        if (!this.options.migrationsRun) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.runMigrations({ transaction: this.options.migrationsTransactionMode })];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        error_1 = _a.sent();
                        // if for some reason build metadata fail (for example validation error during entity metadata check)
                        // connection needs to be closed
                        return [4 /*yield*/, this.close()];
                    case 14:
                        // if for some reason build metadata fail (for example validation error during entity metadata check)
                        // connection needs to be closed
                        _a.sent();
                        throw error_1;
                    case 15: return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * Closes connection with the database.
     * Once connection is closed, you cannot use repositories or perform any operations except opening connection again.
     */
    Connection.prototype.close = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isConnected)
                            throw new CannotExecuteNotConnectedError_1.CannotExecuteNotConnectedError(this.name);
                        return [4 /*yield*/, this.driver.disconnect()];
                    case 1:
                        _a.sent();
                        if (!this.queryResultCache) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.queryResultCache.disconnect()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        ObjectUtils_1.ObjectUtils.assign(this, { isConnected: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates database schema for all entities registered in this connection.
     * Can be used only after connection to the database is established.
     *
     * @param dropBeforeSync If set to true then it drops the database with all its tables and data
     */
    Connection.prototype.synchronize = function (dropBeforeSync) {
        if (dropBeforeSync === void 0) { dropBeforeSync = false; }
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var schemaBuilder;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isConnected)
                            throw new CannotExecuteNotConnectedError_1.CannotExecuteNotConnectedError(this.name);
                        if (!dropBeforeSync) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.dropDatabase()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        schemaBuilder = this.driver.createSchemaBuilder();
                        return [4 /*yield*/, schemaBuilder.build()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Drops the database and all its data.
     * Be careful with this method on production since this method will erase all your database tables and their data.
     * Can be used only after connection to the database is established.
     */
    // TODO rename
    Connection.prototype.dropDatabase = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var queryRunner, databases_2, databases_1, databases_1_1, database, e_1_1;
            var e_1, _a;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        queryRunner = this.createQueryRunner();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 13, 15]);
                        if (!(this.driver instanceof SqlServerDriver_1.SqlServerDriver || this.driver instanceof MysqlDriver_1.MysqlDriver || this.driver instanceof AuroraDataApiDriver_1.AuroraDataApiDriver)) return [3 /*break*/, 10];
                        databases_2 = this.driver.database ? [this.driver.database] : [];
                        this.entityMetadatas.forEach(function (metadata) {
                            if (metadata.database && databases_2.indexOf(metadata.database) === -1)
                                databases_2.push(metadata.database);
                        });
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        databases_1 = (0, tslib_1.__values)(databases_2), databases_1_1 = databases_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!databases_1_1.done) return [3 /*break*/, 6];
                        database = databases_1_1.value;
                        return [4 /*yield*/, queryRunner.clearDatabase(database)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        databases_1_1 = databases_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (databases_1_1 && !databases_1_1.done && (_a = databases_1.return)) _a.call(databases_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 12];
                    case 10: return [4 /*yield*/, queryRunner.clearDatabase()];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, queryRunner.release()];
                    case 14:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Runs all pending migrations.
     * Can be used only after connection to the database is established.
     */
    Connection.prototype.runMigrations = function (options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var migrationExecutor, successMigrations;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isConnected)
                            throw new CannotExecuteNotConnectedError_1.CannotExecuteNotConnectedError(this.name);
                        migrationExecutor = new MigrationExecutor_1.MigrationExecutor(this);
                        migrationExecutor.transaction = (options && options.transaction) || "all";
                        return [4 /*yield*/, migrationExecutor.executePendingMigrations()];
                    case 1:
                        successMigrations = _a.sent();
                        return [2 /*return*/, successMigrations];
                }
            });
        });
    };
    /**
     * Reverts last executed migration.
     * Can be used only after connection to the database is established.
     */
    Connection.prototype.undoLastMigration = function (options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var migrationExecutor;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isConnected)
                            throw new CannotExecuteNotConnectedError_1.CannotExecuteNotConnectedError(this.name);
                        migrationExecutor = new MigrationExecutor_1.MigrationExecutor(this);
                        migrationExecutor.transaction = (options && options.transaction) || "all";
                        return [4 /*yield*/, migrationExecutor.undoLastMigration()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Lists all migrations and whether they have been run.
     * Returns true if there are pending migrations
     */
    Connection.prototype.showMigrations = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var migrationExecutor;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isConnected) {
                            throw new CannotExecuteNotConnectedError_1.CannotExecuteNotConnectedError(this.name);
                        }
                        migrationExecutor = new MigrationExecutor_1.MigrationExecutor(this);
                        return [4 /*yield*/, migrationExecutor.showMigrations()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks if entity metadata exist for the given entity class, target name or table name.
     */
    Connection.prototype.hasMetadata = function (target) {
        return !!this.findMetadata(target);
    };
    /**
     * Gets entity metadata for the given entity class or schema name.
     */
    Connection.prototype.getMetadata = function (target) {
        var metadata = this.findMetadata(target);
        if (!metadata)
            throw new EntityMetadataNotFoundError_1.EntityMetadataNotFoundError(target);
        return metadata;
    };
    /**
     * Gets repository for the given entity.
     */
    Connection.prototype.getRepository = function (target) {
        return this.manager.getRepository(target);
    };
    /**
     * Gets tree repository for the given entity class or name.
     * Only tree-type entities can have a TreeRepository, like ones decorated with @Tree decorator.
     */
    Connection.prototype.getTreeRepository = function (target) {
        return this.manager.getTreeRepository(target);
    };
    /**
     * Gets mongodb-specific repository for the given entity class or name.
     * Works only if connection is mongodb-specific.
     */
    Connection.prototype.getMongoRepository = function (target) {
        if (!(this.driver instanceof MongoDriver_1.MongoDriver))
            throw new TypeORMError_1.TypeORMError("You can use getMongoRepository only for MongoDB connections.");
        return this.manager.getRepository(target);
    };
    /**
     * Gets custom entity repository marked with @EntityRepository decorator.
     */
    Connection.prototype.getCustomRepository = function (customRepository) {
        return this.manager.getCustomRepository(customRepository);
    };
    Connection.prototype.transaction = function (isolationOrRunInTransaction, runInTransactionParam) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, this.manager.transaction(isolationOrRunInTransaction, runInTransactionParam)];
            });
        });
    };
    /**
     * Executes raw SQL query and returns raw database results.
     */
    Connection.prototype.query = function (query, parameters, queryRunner) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var usedQueryRunner;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this instanceof MongoEntityManager_1.MongoEntityManager)
                            throw new TypeORMError_1.TypeORMError("Queries aren't supported by MongoDB.");
                        if (queryRunner && queryRunner.isReleased)
                            throw new QueryRunnerProviderAlreadyReleasedError_1.QueryRunnerProviderAlreadyReleasedError();
                        usedQueryRunner = queryRunner || this.createQueryRunner();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 6]);
                        return [4 /*yield*/, usedQueryRunner.query(query, parameters)];
                    case 2: return [2 /*return*/, _a.sent()]; // await is needed here because we are using finally
                    case 3:
                        if (!!queryRunner) return [3 /*break*/, 5];
                        return [4 /*yield*/, usedQueryRunner.release()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Creates a new query builder that can be used to build a SQL query.
     */
    Connection.prototype.createQueryBuilder = function (entityOrRunner, alias, queryRunner) {
        if (this instanceof MongoEntityManager_1.MongoEntityManager)
            throw new TypeORMError_1.TypeORMError("Query Builder is not supported by MongoDB.");
        if (alias) {
            var metadata = this.getMetadata(entityOrRunner);
            return new SelectQueryBuilder_1.SelectQueryBuilder(this, queryRunner)
                .select(alias)
                .from(metadata.target, alias);
        }
        else {
            return new SelectQueryBuilder_1.SelectQueryBuilder(this, entityOrRunner);
        }
    };
    /**
     * Creates a query runner used for perform queries on a single database connection.
     * Using query runners you can control your queries to execute using single database connection and
     * manually control your database transaction.
     *
     * Mode is used in replication mode and indicates whatever you want to connect
     * to master database or any of slave databases.
     * If you perform writes you must use master database,
     * if you perform reads you can use slave databases.
     */
    Connection.prototype.createQueryRunner = function (mode) {
        if (mode === void 0) { mode = "master"; }
        var queryRunner = this.driver.createQueryRunner(mode);
        var manager = this.createEntityManager(queryRunner);
        Object.assign(queryRunner, { manager: manager });
        return queryRunner;
    };
    /**
     * Gets entity metadata of the junction table (many-to-many table).
     */
    Connection.prototype.getManyToManyMetadata = function (entityTarget, relationPropertyPath) {
        var relationMetadata = this.getMetadata(entityTarget).findRelationWithPropertyPath(relationPropertyPath);
        if (!relationMetadata)
            throw new TypeORMError_1.TypeORMError("Relation \"".concat(relationPropertyPath, "\" was not found in ").concat(entityTarget, " entity."));
        if (!relationMetadata.isManyToMany)
            throw new TypeORMError_1.TypeORMError("Relation \"".concat(entityTarget, "#").concat(relationPropertyPath, "\" does not have a many-to-many relationship.") +
                "You can use this method only on many-to-many relations.");
        return relationMetadata.junctionEntityMetadata;
    };
    /**
     * Creates an Entity Manager for the current connection with the help of the EntityManagerFactory.
     */
    Connection.prototype.createEntityManager = function (queryRunner) {
        return new EntityManagerFactory_1.EntityManagerFactory().create(this, queryRunner);
    };
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    /**
     * Finds exist entity metadata by the given entity class, target name or table name.
     */
    Connection.prototype.findMetadata = function (target) {
        return this.entityMetadatas.find(function (metadata) {
            if (metadata.target === target)
                return true;
            if (target instanceof EntitySchema_1.EntitySchema) {
                return metadata.name === target.options.name;
            }
            if (typeof target === "string") {
                if (target.indexOf(".") !== -1) {
                    return metadata.tablePath === target;
                }
                else {
                    return metadata.name === target || metadata.tableName === target;
                }
            }
            return false;
        });
    };
    /**
     * Builds metadatas for all registered classes inside this connection.
     */
    Connection.prototype.buildMetadatas = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var connectionMetadataBuilder, entityMetadataValidator, subscribers, entityMetadatas, migrations;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectionMetadataBuilder = new ConnectionMetadataBuilder_1.ConnectionMetadataBuilder(this);
                        entityMetadataValidator = new EntityMetadataValidator_1.EntityMetadataValidator();
                        return [4 /*yield*/, connectionMetadataBuilder.buildSubscribers(this.options.subscribers || [])];
                    case 1:
                        subscribers = _a.sent();
                        ObjectUtils_1.ObjectUtils.assign(this, { subscribers: subscribers });
                        return [4 /*yield*/, connectionMetadataBuilder.buildEntityMetadatas(this.options.entities || [])];
                    case 2:
                        entityMetadatas = _a.sent();
                        ObjectUtils_1.ObjectUtils.assign(this, { entityMetadatas: entityMetadatas });
                        return [4 /*yield*/, connectionMetadataBuilder.buildMigrations(this.options.migrations || [])];
                    case 3:
                        migrations = _a.sent();
                        ObjectUtils_1.ObjectUtils.assign(this, { migrations: migrations });
                        // validate all created entity metadatas to make sure user created entities are valid and correct
                        entityMetadataValidator.validateMany(this.entityMetadatas.filter(function (metadata) { return metadata.tableType !== "view"; }), this.driver);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Connection;
}());
exports.Connection = Connection;

//# sourceMappingURL=Connection.js.map
