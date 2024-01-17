import { Serializer as РасписаниеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-расписание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасписаниеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
