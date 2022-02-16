import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when consumer tries to execute operation allowed only if connection is opened.
 */
var CannotExecuteNotConnectedError = /** @class */ (function (_super) {
    __extends(CannotExecuteNotConnectedError, _super);
    function CannotExecuteNotConnectedError(connectionName) {
<<<<<<< HEAD
        return _super.call(this, "Cannot execute operation on \"".concat(connectionName, "\" connection because connection is not yet established.")) || this;
=======
        return _super.call(this, "Cannot execute operation on \"" + connectionName + "\" connection because connection is not yet established.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return CannotExecuteNotConnectedError;
}(TypeORMError));
export { CannotExecuteNotConnectedError };

//# sourceMappingURL=CannotExecuteNotConnectedError.js.map
