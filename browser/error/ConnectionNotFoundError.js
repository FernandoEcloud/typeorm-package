import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when consumer tries to get connection that does not exist.
 */
var ConnectionNotFoundError = /** @class */ (function (_super) {
    __extends(ConnectionNotFoundError, _super);
    function ConnectionNotFoundError(name) {
<<<<<<< HEAD
        return _super.call(this, "Connection \"".concat(name, "\" was not found.")) || this;
=======
        return _super.call(this, "Connection \"" + name + "\" was not found.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return ConnectionNotFoundError;
}(TypeORMError));
export { ConnectionNotFoundError };

//# sourceMappingURL=ConnectionNotFoundError.js.map
