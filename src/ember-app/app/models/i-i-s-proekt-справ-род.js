import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправРодMixin
} from '../mixins/regenerated/models/i-i-s-proekt-справ-род';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправРодMixin, Validations, {
});

defineProjections(Model);

export default Model;
