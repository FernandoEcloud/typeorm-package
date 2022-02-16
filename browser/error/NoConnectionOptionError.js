import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when some option is not set in the connection options.
 */
var NoConnectionOptionError = /** @class */ (function (_super) {
    __extends(NoConnectionOptionError, _super);
    function NoConnectionOptionError(optionName) {
<<<<<<< HEAD
        return _super.call(this, "Option \"".concat(optionName, "\" is not set in your connection options, please ") +
            "define \"".concat(optionName, "\" option in your connection options or ormconfig.json")) || this;
=======
        return _super.call(this, "Option \"" + optionName + "\" is not set in your connection options, please " +
            ("define \"" + optionName + "\" option in your connection options or ormconfig.json")) || this;
>>>>>>> a3495c7 (INIT)
    }
    return NoConnectionOptionError;
}(TypeORMError));
export { NoConnectionOptionError };

//# sourceMappingURL=NoConnectionOptionError.js.map
