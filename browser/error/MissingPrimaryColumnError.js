import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var MissingPrimaryColumnError = /** @class */ (function (_super) {
    __extends(MissingPrimaryColumnError, _super);
    function MissingPrimaryColumnError(entityMetadata) {
<<<<<<< HEAD
        return _super.call(this, "Entity \"".concat(entityMetadata.name, "\" does not have a primary column. Primary column is required to ") +
=======
        return _super.call(this, "Entity \"" + entityMetadata.name + "\" does not have a primary column. Primary column is required to " +
>>>>>>> a3495c7 (INIT)
            "have in all your entities. Use @PrimaryColumn decorator to add a primary column to your entity.") || this;
    }
    return MissingPrimaryColumnError;
}(TypeORMError));
export { MissingPrimaryColumnError };

//# sourceMappingURL=MissingPrimaryColumnError.js.map
