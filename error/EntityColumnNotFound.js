"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityColumnNotFound = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
var EntityColumnNotFound = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(EntityColumnNotFound, _super);
    function EntityColumnNotFound(propertyPath) {
<<<<<<< HEAD
        return _super.call(this, "No entity column \"".concat(propertyPath, "\" was found.")) || this;
=======
        return _super.call(this, "No entity column \"" + propertyPath + "\" was found.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return EntityColumnNotFound;
}(TypeORMError_1.TypeORMError));
exports.EntityColumnNotFound = EntityColumnNotFound;

//# sourceMappingURL=EntityColumnNotFound.js.map
