import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПриходУходMixin
} from '../mixins/regenerated/models/i-i-s-proekt-приход-уход';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПриходУходMixin, Validations, {
});

defineProjections(Model);

export default Model;
