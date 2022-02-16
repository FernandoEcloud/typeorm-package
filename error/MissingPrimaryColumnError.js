"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingPrimaryColumnError = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
var MissingPrimaryColumnError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MissingPrimaryColumnError, _super);
    function MissingPrimaryColumnError(entityMetadata) {
<<<<<<< HEAD
        return _super.call(this, "Entity \"".concat(entityMetadata.name, "\" does not have a primary column. Primary column is required to ") +
=======
        return _super.call(this, "Entity \"" + entityMetadata.name + "\" does not have a primary column. Primary column is required to " +
>>>>>>> a3495c7 (INIT)
            "have in all your entities. Use @PrimaryColumn decorator to add a primary column to your entity.") || this;
    }
    return MissingPrimaryColumnError;
}(TypeORMError_1.TypeORMError));
exports.MissingPrimaryColumnError = MissingPrimaryColumnError;

//# sourceMappingURL=MissingPrimaryColumnError.js.map
