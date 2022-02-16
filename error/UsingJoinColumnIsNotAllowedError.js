"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsingJoinColumnIsNotAllowedError = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
var UsingJoinColumnIsNotAllowedError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(UsingJoinColumnIsNotAllowedError, _super);
    function UsingJoinColumnIsNotAllowedError(entityMetadata, relation) {
<<<<<<< HEAD
        return _super.call(this, "Using JoinColumn on ".concat(entityMetadata.name, "#").concat(relation.propertyName, " is wrong. ") +
=======
        return _super.call(this, "Using JoinColumn on " + entityMetadata.name + "#" + relation.propertyName + " is wrong. " +
>>>>>>> a3495c7 (INIT)
            "You can use JoinColumn only on one-to-one and many-to-one relations.") || this;
    }
    return UsingJoinColumnIsNotAllowedError;
}(TypeORMError_1.TypeORMError));
exports.UsingJoinColumnIsNotAllowedError = UsingJoinColumnIsNotAllowedError;

//# sourceMappingURL=UsingJoinColumnIsNotAllowedError.js.map
