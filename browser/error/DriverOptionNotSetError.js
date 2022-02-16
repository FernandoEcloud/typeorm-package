import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown if some required driver's option is not set.
 */
var DriverOptionNotSetError = /** @class */ (function (_super) {
    __extends(DriverOptionNotSetError, _super);
    function DriverOptionNotSetError(optionName) {
<<<<<<< HEAD
        return _super.call(this, "Driver option (".concat(optionName, ") is not set. ") +
=======
        return _super.call(this, "Driver option (" + optionName + ") is not set. " +
>>>>>>> a3495c7 (INIT)
            "Please set it to perform connection to the database.") || this;
    }
    return DriverOptionNotSetError;
}(TypeORMError));
export { DriverOptionNotSetError };

//# sourceMappingURL=DriverOptionNotSetError.js.map
