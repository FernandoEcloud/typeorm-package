import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when same object is scheduled for remove and updation at the same time.
 */
var SubjectRemovedAndUpdatedError = /** @class */ (function (_super) {
    __extends(SubjectRemovedAndUpdatedError, _super);
    function SubjectRemovedAndUpdatedError(subject) {
<<<<<<< HEAD
        return _super.call(this, "Removed entity \"".concat(subject.metadata.name, "\" is also scheduled for update operation. ") +
=======
        return _super.call(this, "Removed entity \"" + subject.metadata.name + "\" is also scheduled for update operation. " +
>>>>>>> a3495c7 (INIT)
            "Make sure you are not updating and removing same object (note that update or remove may be executed by cascade operations).") || this;
    }
    return SubjectRemovedAndUpdatedError;
}(TypeORMError));
export { SubjectRemovedAndUpdatedError };

//# sourceMappingURL=SubjectRemovedAndUpdatedError.js.map
