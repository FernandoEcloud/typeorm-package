import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when an entity does not have no version and no update date column.
 */
var NoVersionOrUpdateDateColumnError = /** @class */ (function (_super) {
    __extends(NoVersionOrUpdateDateColumnError, _super);
    function NoVersionOrUpdateDateColumnError(entity) {
<<<<<<< HEAD
        return _super.call(this, "Entity ".concat(entity, " does not have version or update date columns.")) || this;
=======
        return _super.call(this, "Entity " + entity + " does not have version or update date columns.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return NoVersionOrUpdateDateColumnError;
}(TypeORMError));
export { NoVersionOrUpdateDateColumnError };

//# sourceMappingURL=NoVersionOrUpdateDateColumnError.js.map
