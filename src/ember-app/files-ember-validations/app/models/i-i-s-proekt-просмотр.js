import {
  defineNamespace,
  defineProjections,
  Model as ПросмотрMixin
} from '../mixins/regenerated/models/i-i-s-proekt-просмотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПросмотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
