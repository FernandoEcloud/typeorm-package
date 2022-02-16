import { __extends } from "tslib";
import { EntitySchema } from "../entity-schema/EntitySchema";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when repository for the given class is not found.
 */
var RepositoryNotFoundError = /** @class */ (function (_super) {
    __extends(RepositoryNotFoundError, _super);
    function RepositoryNotFoundError(connectionName, entityClass) {
        var _this = _super.call(this) || this;
        var targetName;
        if (entityClass instanceof EntitySchema) {
            targetName = entityClass.options.name;
        }
        else if (typeof entityClass === "function") {
            targetName = entityClass.name;
        }
        else if (typeof entityClass === "object" && "name" in entityClass) {
            targetName = entityClass.name;
        }
        else {
            targetName = entityClass;
        }
<<<<<<< HEAD
        _this.message = "No repository for \"".concat(targetName, "\" was found. Looks like this entity is not registered in ") +
            "current \"".concat(connectionName, "\" connection?");
=======
        _this.message = "No repository for \"" + targetName + "\" was found. Looks like this entity is not registered in " +
            ("current \"" + connectionName + "\" connection?");
>>>>>>> a3495c7 (INIT)
        return _this;
    }
    return RepositoryNotFoundError;
}(TypeORMError));
export { RepositoryNotFoundError };

//# sourceMappingURL=RepositoryNotFoundError.js.map
