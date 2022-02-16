import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
/**
 * Thrown when consumer tries to access repository before connection is established.
 */
var NoConnectionForRepositoryError = /** @class */ (function (_super) {
    __extends(NoConnectionForRepositoryError, _super);
    function NoConnectionForRepositoryError(connectionName) {
<<<<<<< HEAD
        return _super.call(this, "Cannot get a Repository for \"".concat(connectionName, " connection, because connection with the database ") +
=======
        return _super.call(this, "Cannot get a Repository for \"" + connectionName + " connection, because connection with the database " +
>>>>>>> a3495c7 (INIT)
            "is not established yet. Call connection#connect method to establish connection.") || this;
    }
    return NoConnectionForRepositoryError;
}(TypeORMError));
export { NoConnectionForRepositoryError };

//# sourceMappingURL=NoConnectionForRepositoryError.js.map
