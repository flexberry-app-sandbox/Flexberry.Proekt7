import {
  defineNamespace,
  defineProjections,
  Model as КлассУчMixin
} from '../mixins/regenerated/models/i-i-s-proekt-класс-уч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлассУчMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
