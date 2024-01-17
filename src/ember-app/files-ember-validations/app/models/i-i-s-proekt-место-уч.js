import {
  defineNamespace,
  defineProjections,
  Model as МестоУчMixin
} from '../mixins/regenerated/models/i-i-s-proekt-место-уч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МестоУчMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
