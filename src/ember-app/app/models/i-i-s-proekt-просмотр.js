import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПросмотрMixin
} from '../mixins/regenerated/models/i-i-s-proekt-просмотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПросмотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
