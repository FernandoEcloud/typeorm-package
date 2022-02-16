import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when user tries to execute operation that requires connection to be established.
 */
var ConnectionIsNotSetError = /** @class */ (function (_super) {
    __extends(ConnectionIsNotSetError, _super);
    function ConnectionIsNotSetError(dbType) {
<<<<<<< HEAD
        return _super.call(this, "Connection with ".concat(dbType, " database is not established. Check connection configuration.")) || this;
=======
        return _super.call(this, "Connection with " + dbType + " database is not established. Check connection configuration.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return ConnectionIsNotSetError;
}(TypeORMError));
export { ConnectionIsNotSetError };

//# sourceMappingURL=ConnectionIsNotSetError.js.map
