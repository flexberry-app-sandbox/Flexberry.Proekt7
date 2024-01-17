import { Serializer as КлассУчSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-класс-уч';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлассУчSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
