"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingDeleteDateColumnError = void 0;
var tslib_1 = require("tslib");
var TypeORMError_1 = require("./TypeORMError");
var MissingDeleteDateColumnError = /** @class */ (function (_super) {
    (0, tslib_1.__extends)(MissingDeleteDateColumnError, _super);
    function MissingDeleteDateColumnError(entityMetadata) {
<<<<<<< HEAD
        return _super.call(this, "Entity \"".concat(entityMetadata.name, "\" does not have delete date columns.")) || this;
=======
        return _super.call(this, "Entity \"" + entityMetadata.name + "\" does not have delete date columns.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return MissingDeleteDateColumnError;
}(TypeORMError_1.TypeORMError));
exports.MissingDeleteDateColumnError = MissingDeleteDateColumnError;

//# sourceMappingURL=MissingDeleteDateColumnError.js.map
