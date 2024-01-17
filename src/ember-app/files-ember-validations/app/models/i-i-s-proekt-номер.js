import {
  defineNamespace,
  defineProjections,
  Model as НомерMixin
} from '../mixins/regenerated/models/i-i-s-proekt-номер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НомерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
