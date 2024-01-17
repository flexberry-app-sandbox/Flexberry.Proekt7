import { Serializer as СправСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proekt-справ-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СправСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
