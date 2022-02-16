import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when a version check on an object that uses optimistic locking through a version field fails.
 */
var OptimisticLockVersionMismatchError = /** @class */ (function (_super) {
    __extends(OptimisticLockVersionMismatchError, _super);
    function OptimisticLockVersionMismatchError(entity, expectedVersion, actualVersion) {
<<<<<<< HEAD
        return _super.call(this, "The optimistic lock on entity ".concat(entity, " failed, version ").concat(expectedVersion, " was expected, but is actually ").concat(actualVersion, ".")) || this;
=======
        return _super.call(this, "The optimistic lock on entity " + entity + " failed, version " + expectedVersion + " was expected, but is actually " + actualVersion + ".") || this;
>>>>>>> a3495c7 (INIT)
    }
    return OptimisticLockVersionMismatchError;
}(TypeORMError));
export { OptimisticLockVersionMismatchError };

//# sourceMappingURL=OptimisticLockVersionMismatchError.js.map
