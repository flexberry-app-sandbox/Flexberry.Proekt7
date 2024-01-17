import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлассУчMixin
} from '../mixins/regenerated/models/i-i-s-proekt-класс-уч';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлассУчMixin, Validations, {
});

defineProjections(Model);

export default Model;
