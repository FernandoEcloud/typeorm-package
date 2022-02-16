"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptimisticLockVersionMismatchError = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
/**
 * Thrown when a version check on an object that uses optimistic locking through a version field fails.
 */
var OptimisticLockVersionMismatchError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(OptimisticLockVersionMismatchError, _super);
    function OptimisticLockVersionMismatchError(entity, expectedVersion, actualVersion) {
<<<<<<< HEAD
        return _super.call(this, "The optimistic lock on entity ".concat(entity, " failed, version ").concat(expectedVersion, " was expected, but is actually ").concat(actualVersion, ".")) || this;
=======
        return _super.call(this, "The optimistic lock on entity " + entity + " failed, version " + expectedVersion + " was expected, but is actually " + actualVersion + ".") || this;
>>>>>>> a3495c7 (INIT)
    }
    return OptimisticLockVersionMismatchError;
}(TypeORMError_1.TypeORMError));
exports.OptimisticLockVersionMismatchError = OptimisticLockVersionMismatchError;

//# sourceMappingURL=OptimisticLockVersionMismatchError.js.map
