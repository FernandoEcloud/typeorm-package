import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var UsingJoinColumnIsNotAllowedError = /** @class */ (function (_super) {
    __extends(UsingJoinColumnIsNotAllowedError, _super);
    function UsingJoinColumnIsNotAllowedError(entityMetadata, relation) {
<<<<<<< HEAD
        return _super.call(this, "Using JoinColumn on ".concat(entityMetadata.name, "#").concat(relation.propertyName, " is wrong. ") +
=======
        return _super.call(this, "Using JoinColumn on " + entityMetadata.name + "#" + relation.propertyName + " is wrong. " +
>>>>>>> a3495c7 (INIT)
            "You can use JoinColumn only on one-to-one and many-to-one relations.") || this;
    }
    return UsingJoinColumnIsNotAllowedError;
}(TypeORMError));
export { UsingJoinColumnIsNotAllowedError };

//# sourceMappingURL=UsingJoinColumnIsNotAllowedError.js.map
