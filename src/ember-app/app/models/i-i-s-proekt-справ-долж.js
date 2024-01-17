import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправДолжMixin
} from '../mixins/regenerated/models/i-i-s-proekt-справ-долж';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправДолжMixin, Validations, {
});

defineProjections(Model);

export default Model;
