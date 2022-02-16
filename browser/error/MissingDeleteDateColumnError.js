import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var MissingDeleteDateColumnError = /** @class */ (function (_super) {
    __extends(MissingDeleteDateColumnError, _super);
    function MissingDeleteDateColumnError(entityMetadata) {
<<<<<<< HEAD
        return _super.call(this, "Entity \"".concat(entityMetadata.name, "\" does not have delete date columns.")) || this;
=======
        return _super.call(this, "Entity \"" + entityMetadata.name + "\" does not have delete date columns.") || this;
>>>>>>> a3495c7 (INIT)
    }
    return MissingDeleteDateColumnError;
}(TypeORMError));
export { MissingDeleteDateColumnError };

//# sourceMappingURL=MissingDeleteDateColumnError.js.map
