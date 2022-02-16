"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypeNotSupportedError = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
var DataTypeNotSupportedError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(DataTypeNotSupportedError, _super);
    function DataTypeNotSupportedError(column, dataType, database) {
        var _this = _super.call(this) || this;
        var type = typeof dataType === "string" ? dataType : dataType.name;
<<<<<<< HEAD
        _this.message = "Data type \"".concat(type, "\" in \"").concat(column.entityMetadata.targetName, ".").concat(column.propertyName, "\" is not supported by \"").concat(database, "\" database.");
=======
        _this.message = "Data type \"" + type + "\" in \"" + column.entityMetadata.targetName + "." + column.propertyName + "\" is not supported by \"" + database + "\" database.";
>>>>>>> a3495c7 (INIT)
        return _this;
    }
    return DataTypeNotSupportedError;
}(TypeORMError_1.TypeORMError));
exports.DataTypeNotSupportedError = DataTypeNotSupportedError;

//# sourceMappingURL=DataTypeNotSupportedError.js.map
