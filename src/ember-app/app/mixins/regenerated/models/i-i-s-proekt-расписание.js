import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  периодДо: DS.attr('string'),
  периодОт: DS.attr('string'),
  урок: DS.attr('string')
});

export let ValidationRules = {
  периодДо: {
    descriptionKey: 'models.i-i-s-proekt-расписание.validations.периодДо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  периодОт: {
    descriptionKey: 'models.i-i-s-proekt-расписание.validations.периодОт.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  урок: {
    descriptionKey: 'models.i-i-s-proekt-расписание.validations.урок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасписаниеE', 'i-i-s-proekt-расписание', {
    урок: attr('Номер урока', { index: 0 }),
    периодОт: attr('Период От', { index: 1 }),
    периодДо: attr('Период До', { index: 2 })
  });

  modelClass.defineProjection('РасписаниеL', 'i-i-s-proekt-расписание', {
    урок: attr('Номер урока', { index: 0 }),
    периодОт: attr('Период От', { index: 1 }),
    периодДо: attr('Период До', { index: 2 })
  });
};
