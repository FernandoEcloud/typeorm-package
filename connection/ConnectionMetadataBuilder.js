"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionMetadataBuilder = void 0;
var tslib_1 = require("tslib");
var DirectoryExportedClassesLoader_1 = require("../util/DirectoryExportedClassesLoader");
var OrmUtils_1 = require("../util/OrmUtils");
var container_1 = require("../container");
var globals_1 = require("../globals");
var EntityMetadataBuilder_1 = require("../metadata-builder/EntityMetadataBuilder");
var EntitySchemaTransformer_1 = require("../entity-schema/EntitySchemaTransformer");
var EntitySchema_1 = require("../entity-schema/EntitySchema");
/**
 * Builds migration instances, subscriber instances and entity metadatas for the given classes.
 */
var ConnectionMetadataBuilder = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function ConnectionMetadataBuilder(connection) {
        this.connection = connection;
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    /**
     * Builds migration instances for the given classes or directories.
     */
    ConnectionMetadataBuilder.prototype.buildMigrations = function (migrations) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, migrationClasses, migrationDirectories, allMigrationClasses, _b;
            return (0, tslib_1.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (0, tslib_1.__read)(OrmUtils_1.OrmUtils.splitClassesAndStrings(migrations), 2), migrationClasses = _a[0], migrationDirectories = _a[1];
                        _b = [(0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(migrationClasses), false)];
                        return [4 /*yield*/, (0, DirectoryExportedClassesLoader_1.importClassesFromDirectories)(this.connection.logger, migrationDirectories)];
                    case 1:
                        allMigrationClasses = tslib_1.__spreadArray.apply(void 0, _b.concat([tslib_1.__read.apply(void 0, [(_c.sent())]), false]));
                        return [2 /*return*/, allMigrationClasses.map(function (migrationClass) { return (0, container_1.getFromContainer)(migrationClass); })];
                }
            });
        });
    };
    /**
     * Builds subscriber instances for the given classes or directories.
     */
    ConnectionMetadataBuilder.prototype.buildSubscribers = function (subscribers) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, subscriberClasses, subscriberDirectories, allSubscriberClasses, _b;
            return (0, tslib_1.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (0, tslib_1.__read)(OrmUtils_1.OrmUtils.splitClassesAndStrings(subscribers || []), 2), subscriberClasses = _a[0], subscriberDirectories = _a[1];
                        _b = [(0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(subscriberClasses), false)];
                        return [4 /*yield*/, (0, DirectoryExportedClassesLoader_1.importClassesFromDirectories)(this.connection.logger, subscriberDirectories)];
                    case 1:
                        allSubscriberClasses = tslib_1.__spreadArray.apply(void 0, _b.concat([tslib_1.__read.apply(void 0, [(_c.sent())]), false]));
                        return [2 /*return*/, (0, globals_1.getMetadataArgsStorage)()
                                .filterSubscribers(allSubscriberClasses)
                                .map(function (metadata) { return (0, container_1.getFromContainer)(metadata.target); })];
                }
            });
        });
    };
    /**
     * Builds entity metadatas for the given classes or directories.
     */
    ConnectionMetadataBuilder.prototype.buildEntityMetadatas = function (entities) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, entityClassesOrSchemas, entityDirectories, entityClasses, entitySchemas, allEntityClasses, _b, decoratorEntityMetadatas, metadataArgsStorageFromSchema, schemaEntityMetadatas;
            return (0, tslib_1.__generator)(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = (0, tslib_1.__read)(OrmUtils_1.OrmUtils.splitClassesAndStrings(entities || []), 2), entityClassesOrSchemas = _a[0], entityDirectories = _a[1];
                        entityClasses = entityClassesOrSchemas.filter(function (entityClass) { return (entityClass instanceof EntitySchema_1.EntitySchema) === false; });
                        entitySchemas = entityClassesOrSchemas.filter(function (entityClass) { return entityClass instanceof EntitySchema_1.EntitySchema; });
                        _b = [(0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(entityClasses), false)];
                        return [4 /*yield*/, (0, DirectoryExportedClassesLoader_1.importClassesFromDirectories)(this.connection.logger, entityDirectories)];
                    case 1:
                        allEntityClasses = tslib_1.__spreadArray.apply(void 0, _b.concat([tslib_1.__read.apply(void 0, [(_c.sent())]), false]));
                        allEntityClasses.forEach(function (entityClass) {
                            if (entityClass instanceof EntitySchema_1.EntitySchema) {
                                entitySchemas.push(entityClass);
                            }
                        });
                        decoratorEntityMetadatas = new EntityMetadataBuilder_1.EntityMetadataBuilder(this.connection, (0, globals_1.getMetadataArgsStorage)()).build(allEntityClasses);
                        metadataArgsStorageFromSchema = new EntitySchemaTransformer_1.EntitySchemaTransformer().transform(entitySchemas);
                        schemaEntityMetadatas = new EntityMetadataBuilder_1.EntityMetadataBuilder(this.connection, metadataArgsStorageFromSchema).build();
                        return [2 /*return*/, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(decoratorEntityMetadatas), false), (0, tslib_1.__read)(schemaEntityMetadatas), false)];
                }
            });
        });
    };
    return ConnectionMetadataBuilder;
}());
exports.ConnectionMetadataBuilder = ConnectionMetadataBuilder;

//# sourceMappingURL=ConnectionMetadataBuilder.js.map
