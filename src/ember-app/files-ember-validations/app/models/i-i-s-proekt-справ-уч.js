import {
  defineNamespace,
  defineProjections,
  Model as СправУчMixin
} from '../mixins/regenerated/models/i-i-s-proekt-справ-уч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправУчMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
