"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNamingStrategy = void 0;
var tslib_1 = require("tslib");
var RandomGenerator_1 = require("../util/RandomGenerator");
var StringUtils_1 = require("../util/StringUtils");
var Table_1 = require("../schema-builder/table/Table");
/**
 * Naming strategy that is used by default.
 */
var DefaultNamingStrategy = /** @class */ (function () {
    function DefaultNamingStrategy() {
        this.nestedSetColumnNames = { left: "nsleft", right: "nsright" };
        this.materializedPathColumnName = "mpath";
    }
    DefaultNamingStrategy.prototype.getTableName = function (tableOrName) {
        if (tableOrName instanceof Table_1.Table) {
            tableOrName = tableOrName.name;
        }
        return tableOrName.split(".").pop();
    };
    /**
     * Normalizes table name.
     *
     * @param targetName Name of the target entity that can be used to generate a table name.
     * @param userSpecifiedName For example if user specified a table name in a decorator, e.g. @Entity("name")
     */
    DefaultNamingStrategy.prototype.tableName = function (targetName, userSpecifiedName) {
        return userSpecifiedName ? userSpecifiedName : (0, StringUtils_1.snakeCase)(targetName);
    };
    /**
     * Creates a table name for a junction table of a closure table.
     *
     * @param originalClosureTableName Name of the closure table which owns this junction table.
     */
    DefaultNamingStrategy.prototype.closureJunctionTableName = function (originalClosureTableName) {
        return originalClosureTableName + "_closure";
    };
    DefaultNamingStrategy.prototype.columnName = function (propertyName, customName, embeddedPrefixes) {
        var name = customName || propertyName;
        if (embeddedPrefixes.length)
            return (0, StringUtils_1.camelCase)(embeddedPrefixes.join("_")) + (0, StringUtils_1.titleCase)(name);
        return name;
    };
    DefaultNamingStrategy.prototype.relationName = function (propertyName) {
        return propertyName;
    };
    DefaultNamingStrategy.prototype.primaryKeyName = function (tableOrName, columnNames) {
        // sort incoming column names to avoid issue when ["id", "name"] and ["name", "id"] arrays
        var clonedColumnNames = (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(columnNames), false);
        clonedColumnNames.sort();
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(clonedColumnNames.join("_"));
=======
        var key = replacedTableName + "_" + clonedColumnNames.join("_");
>>>>>>> a3495c7 (INIT)
        return "PK_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 27);
    };
    DefaultNamingStrategy.prototype.uniqueConstraintName = function (tableOrName, columnNames) {
        // sort incoming column names to avoid issue when ["id", "name"] and ["name", "id"] arrays
        var clonedColumnNames = (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(columnNames), false);
        clonedColumnNames.sort();
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(clonedColumnNames.join("_"));
=======
        var key = replacedTableName + "_" + clonedColumnNames.join("_");
>>>>>>> a3495c7 (INIT)
        return "UQ_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 27);
    };
    DefaultNamingStrategy.prototype.relationConstraintName = function (tableOrName, columnNames, where) {
        // sort incoming column names to avoid issue when ["id", "name"] and ["name", "id"] arrays
        var clonedColumnNames = (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(columnNames), false);
        clonedColumnNames.sort();
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(clonedColumnNames.join("_"));
        if (where)
            key += "_".concat(where);
=======
        var key = replacedTableName + "_" + clonedColumnNames.join("_");
        if (where)
            key += "_" + where;
>>>>>>> a3495c7 (INIT)
        return "REL_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 26);
    };
    DefaultNamingStrategy.prototype.defaultConstraintName = function (tableOrName, columnName) {
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(columnName);
=======
        var key = replacedTableName + "_" + columnName;
>>>>>>> a3495c7 (INIT)
        return "DF_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 27);
    };
    DefaultNamingStrategy.prototype.foreignKeyName = function (tableOrName, columnNames, _referencedTablePath, _referencedColumnNames) {
        // sort incoming column names to avoid issue when ["id", "name"] and ["name", "id"] arrays
        var clonedColumnNames = (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(columnNames), false);
        clonedColumnNames.sort();
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(clonedColumnNames.join("_"));
=======
        var key = replacedTableName + "_" + clonedColumnNames.join("_");
>>>>>>> a3495c7 (INIT)
        return "FK_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 27);
    };
    DefaultNamingStrategy.prototype.indexName = function (tableOrName, columnNames, where) {
        // sort incoming column names to avoid issue when ["id", "name"] and ["name", "id"] arrays
        var clonedColumnNames = (0, tslib_1.__spreadArray)([], (0, tslib_1.__read)(columnNames), false);
        clonedColumnNames.sort();
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(clonedColumnNames.join("_"));
        if (where)
            key += "_".concat(where);
=======
        var key = replacedTableName + "_" + clonedColumnNames.join("_");
        if (where)
            key += "_" + where;
>>>>>>> a3495c7 (INIT)
        return "IDX_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 26);
    };
    DefaultNamingStrategy.prototype.checkConstraintName = function (tableOrName, expression, isEnum) {
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(expression);
        var name = "CHK_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 26);
        return isEnum ? "".concat(name, "_ENUM") : name;
=======
        var key = replacedTableName + "_" + expression;
        var name = "CHK_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 26);
        return isEnum ? name + "_ENUM" : name;
>>>>>>> a3495c7 (INIT)
    };
    DefaultNamingStrategy.prototype.exclusionConstraintName = function (tableOrName, expression) {
        var tableName = this.getTableName(tableOrName);
        var replacedTableName = tableName.replace(".", "_");
<<<<<<< HEAD
        var key = "".concat(replacedTableName, "_").concat(expression);
=======
        var key = replacedTableName + "_" + expression;
>>>>>>> a3495c7 (INIT)
        return "XCL_" + RandomGenerator_1.RandomGenerator.sha1(key).substr(0, 26);
    };
    DefaultNamingStrategy.prototype.joinColumnName = function (relationName, referencedColumnName) {
        return (0, StringUtils_1.camelCase)(relationName + "_" + referencedColumnName);
    };
    DefaultNamingStrategy.prototype.joinTableName = function (firstTableName, secondTableName, firstPropertyName, secondPropertyName) {
        return (0, StringUtils_1.snakeCase)(firstTableName + "_" + firstPropertyName.replace(/\./gi, "_") + "_" + secondTableName);
    };
    DefaultNamingStrategy.prototype.joinTableColumnDuplicationPrefix = function (columnName, index) {
        return columnName + "_" + index;
    };
    DefaultNamingStrategy.prototype.joinTableColumnName = function (tableName, propertyName, columnName) {
        return (0, StringUtils_1.camelCase)(tableName + "_" + (columnName ? columnName : propertyName));
    };
    DefaultNamingStrategy.prototype.joinTableInverseColumnName = function (tableName, propertyName, columnName) {
        return this.joinTableColumnName(tableName, propertyName, columnName);
    };
    /**
     * Adds globally set prefix to the table name.
     * This method is executed no matter if prefix was set or not.
     * Table name is either user's given table name, either name generated from entity target.
     * Note that table name comes here already normalized by #tableName method.
     */
    DefaultNamingStrategy.prototype.prefixTableName = function (prefix, tableName) {
        return prefix + tableName;
    };
    DefaultNamingStrategy.prototype.eagerJoinRelationAlias = function (alias, propertyPath) {
        return alias + "_" + propertyPath.replace(".", "_");
    };
    return DefaultNamingStrategy;
}());
exports.DefaultNamingStrategy = DefaultNamingStrategy;

//# sourceMappingURL=DefaultNamingStrategy.js.map
