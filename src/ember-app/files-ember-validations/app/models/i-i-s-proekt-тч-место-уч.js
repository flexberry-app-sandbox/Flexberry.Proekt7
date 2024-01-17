import {
  defineNamespace,
  defineProjections,
  Model as ТчМестоУчMixin
} from '../mixins/regenerated/models/i-i-s-proekt-тч-место-уч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчМестоУчMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
