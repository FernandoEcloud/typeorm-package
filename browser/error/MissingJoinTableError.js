import { __extends } from "tslib";
import { TypeORMError } from "./TypeORMError";
var MissingJoinTableError = /** @class */ (function (_super) {
    __extends(MissingJoinTableError, _super);
    function MissingJoinTableError(entityMetadata, relation) {
        var _this = _super.call(this) || this;
        if (relation.inverseRelation) {
<<<<<<< HEAD
            _this.message = "JoinTable is missing on both sides of ".concat(entityMetadata.name, "#").concat(relation.propertyName, " and ") +
                "".concat(relation.inverseEntityMetadata.name, "#").concat(relation.inverseRelation.propertyName, " many-to-many relationship. ") +
                "You need to put decorator decorator on one of the sides.";
        }
        else {
            _this.message = "JoinTable is missing on ".concat(entityMetadata.name, "#").concat(relation.propertyName, " many-to-many relationship. ") +
=======
            _this.message = "JoinTable is missing on both sides of " + entityMetadata.name + "#" + relation.propertyName + " and " +
                (relation.inverseEntityMetadata.name + "#" + relation.inverseRelation.propertyName + " many-to-many relationship. ") +
                "You need to put decorator decorator on one of the sides.";
        }
        else {
            _this.message = "JoinTable is missing on " + entityMetadata.name + "#" + relation.propertyName + " many-to-many relationship. " +
>>>>>>> a3495c7 (INIT)
                "You need to put JoinTable decorator on it.";
        }
        return _this;
    }
    return MissingJoinTableError;
}(TypeORMError));
export { MissingJoinTableError };

//# sourceMappingURL=MissingJoinTableError.js.map
