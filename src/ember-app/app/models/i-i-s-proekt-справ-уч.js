import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СправУчMixin
} from '../mixins/regenerated/models/i-i-s-proekt-справ-уч';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СправУчMixin, Validations, {
});

defineProjections(Model);

export default Model;
