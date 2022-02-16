import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var EntityColumnNotFound = /** @class */ (function (_super) {
    __extends(EntityColumnNotFound, _super);
    function EntityColumnNotFound(propertyPath) {
<<<<<<< HEAD
        return _super.call(this, "No entity column \"".concat(propertyPath, "\" was found.")) || this;
=======
        return _super.call(this, "No entity column \"" + propertyPath + "\" was found.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return EntityColumnNotFound;
}(TypeORMError));
export { EntityColumnNotFound };

//# sourceMappingURL=EntityColumnNotFound.js.map
