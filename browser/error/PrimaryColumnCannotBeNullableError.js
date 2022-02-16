import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var PrimaryColumnCannotBeNullableError = /** @class */ (function (_super) {
    __extends(PrimaryColumnCannotBeNullableError, _super);
    function PrimaryColumnCannotBeNullableError(object, propertyName) {
<<<<<<< HEAD
        return _super.call(this, "Primary column ".concat(object.constructor.name, "#").concat(propertyName, " cannot be nullable. ") +
=======
        return _super.call(this, "Primary column " + object.constructor.name + "#" + propertyName + " cannot be nullable. " +
>>>>>>> a3495c7 (INIT)
            "Its not allowed for primary keys. Try to remove nullable option.") || this;
    }
    return PrimaryColumnCannotBeNullableError;
}(TypeORMError));
export { PrimaryColumnCannotBeNullableError };

//# sourceMappingURL=PrimaryColumnCannotBeNullableError.js.map
