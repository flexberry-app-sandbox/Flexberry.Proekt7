import { Serializer as МестоУчSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-место-уч';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МестоУчSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
