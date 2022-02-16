import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when user tries to save/remove/etc. constructor-less object (object literal) instead of entity.
 */
var CannotDetermineEntityError = /** @class */ (function (_super) {
    __extends(CannotDetermineEntityError, _super);
    function CannotDetermineEntityError(operation) {
<<<<<<< HEAD
        return _super.call(this, "Cannot ".concat(operation, ", given value must be instance of entity class, ") +
=======
        return _super.call(this, "Cannot " + operation + ", given value must be instance of entity class, " +
>>>>>>> a3495c7 (INIT)
            "instead object literal is given. Or you must specify an entity target to method call.") || this;
    }
    return CannotDetermineEntityError;
}(TypeORMError));
export { CannotDetermineEntityError };

//# sourceMappingURL=CannotDetermineEntityError.js.map
