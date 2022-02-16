import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var TreeRepositoryNotSupportedError = /** @class */ (function (_super) {
    __extends(TreeRepositoryNotSupportedError, _super);
    function TreeRepositoryNotSupportedError(driver) {
<<<<<<< HEAD
        return _super.call(this, "Tree repositories are not supported in ".concat(driver.options.type, " driver.")) || this;
=======
        return _super.call(this, "Tree repositories are not supported in " + driver.options.type + " driver.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return TreeRepositoryNotSupportedError;
}(TypeORMError));
export { TreeRepositoryNotSupportedError };

//# sourceMappingURL=TreeRepositoryNotSupportedError.js.map
