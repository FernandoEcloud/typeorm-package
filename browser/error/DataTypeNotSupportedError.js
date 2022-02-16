import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var DataTypeNotSupportedError = /** @class */ (function (_super) {
    __extends(DataTypeNotSupportedError, _super);
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
}(TypeORMError));
export { DataTypeNotSupportedError };

//# sourceMappingURL=DataTypeNotSupportedError.js.map
