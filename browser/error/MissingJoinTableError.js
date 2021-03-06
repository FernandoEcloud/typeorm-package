import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var MissingJoinTableError = /** @class */ (function (_super) {
    __extends(MissingJoinTableError, _super);
    function MissingJoinTableError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        if (relation.inverseRelation) {
            _this.message = "JoinTable is missing on both sides of " + entityMetadata.name + "#" + relation.propertyName + " and " +
                (relation.inverseEntityMetadata.name + "#" + relation.inverseRelation.propertyName + " many-to-many relationship. ") +
                "You need to put decorator decorator on one of the sides.";
        }
        else {
            _this.message = "JoinTable is missing on " + entityMetadata.name + "#" + relation.propertyName + " many-to-many relationship. " +
                "You need to put JoinTable decorator on it.";
        }
        return _this;
    }
    return MissingJoinTableError;
}(TypeORMError));
export { MissingJoinTableError };

//# sourceMappingURL=MissingJoinTableError.js.map
