import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when consumer tries to use naming strategy that does not exist.
 */
var NamingStrategyNotFoundError = /** @class */ (function (_super) {
    __extends(NamingStrategyNotFoundError, _super);
    function NamingStrategyNotFoundError(strategyName, connectionName) {
        var _this = _super.call(this) || this;
        var name = strategyName instanceof Function ? strategyName.name : strategyName;
<<<<<<< HEAD
        _this.message = "Naming strategy \"".concat(name, "\" was not found. Looks like this naming strategy does not ") +
            "exist or it was not registered in current \"".concat(connectionName, "\" connection?");
=======
        _this.message = "Naming strategy \"" + name + "\" was not found. Looks like this naming strategy does not " +
            ("exist or it was not registered in current \"" + connectionName + "\" connection?");
>>>>>>> a3495c7 (INIT)
        return _this;
    }
    return NamingStrategyNotFoundError;
}(TypeORMError));
export { NamingStrategyNotFoundError };

//# sourceMappingURL=NamingStrategyNotFoundError.js.map
