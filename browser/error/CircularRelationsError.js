import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when circular relations detected with nullable set to false.
 */
var CircularRelationsError = /** @class */ (function (_super) {
    __extends(CircularRelationsError, _super);
    function CircularRelationsError(path) {
<<<<<<< HEAD
        return _super.call(this, "Circular relations detected: ".concat(path, ". To resolve this issue you need to ") +
=======
        return _super.call(this, "Circular relations detected: " + path + ". To resolve this issue you need to " +
>>>>>>> a3495c7 (INIT)
            "set nullable: true somewhere in this dependency structure.") || this;
    }
    return CircularRelationsError;
}(TypeORMError));
export { CircularRelationsError };

//# sourceMappingURL=CircularRelationsError.js.map
