import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown if custom repository was not found.
 */
var CustomRepositoryNotFoundError = /** @class */ (function (_super) {
    __extends(CustomRepositoryNotFoundError, _super);
    function CustomRepositoryNotFoundError(repository) {
<<<<<<< HEAD
        return _super.call(this, "Custom repository ".concat(repository instanceof Function ? repository.name : repository.constructor.name, " was not found. ") +
=======
        return _super.call(this, "Custom repository " + (repository instanceof Function ? repository.name : repository.constructor.name) + " was not found. " +
>>>>>>> a3495c7 (INIT)
            "Did you forgot to put @EntityRepository decorator on it?") || this;
    }
    return CustomRepositoryNotFoundError;
}(TypeORMError));
export { CustomRepositoryNotFoundError };

//# sourceMappingURL=CustomRepositoryNotFoundError.js.map
