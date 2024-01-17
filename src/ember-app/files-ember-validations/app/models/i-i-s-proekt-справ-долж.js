import {
  defineNamespace,
  defineProjections,
  Model as СправДолжMixin
} from '../mixins/regenerated/models/i-i-s-proekt-справ-долж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СправДолжMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
