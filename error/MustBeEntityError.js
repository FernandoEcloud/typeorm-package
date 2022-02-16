"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustBeEntityError = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
/**
 * Thrown when method expects entity but instead something else is given.
 */
var MustBeEntityError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MustBeEntityError, _super);
    function MustBeEntityError(operation, wrongValue) {
<<<<<<< HEAD
        return _super.call(this, "Cannot ".concat(operation, ", given value must be an entity, instead \"").concat(wrongValue, "\" is given.")) || this;
=======
        return _super.call(this, "Cannot " + operation + ", given value must be an entity, instead \"" + wrongValue + "\" is given.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return MustBeEntityError;
}(TypeORMError_1.TypeORMError));
exports.MustBeEntityError = MustBeEntityError;

//# sourceMappingURL=MustBeEntityError.js.map
