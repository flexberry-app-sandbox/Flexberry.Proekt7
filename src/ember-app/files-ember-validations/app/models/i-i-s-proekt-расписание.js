import {
  defineNamespace,
  defineProjections,
  Model as РасписаниеMixin
} from '../mixins/regenerated/models/i-i-s-proekt-расписание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасписаниеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
