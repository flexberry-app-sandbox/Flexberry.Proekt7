import { Serializer as УченикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-ученик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УченикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
