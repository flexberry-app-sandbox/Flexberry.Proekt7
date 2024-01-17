import { Serializer as ПриходУходSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-приход-уход';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриходУходSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
