import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРожд: DS.attr('date'),
  фио: DS.attr('string'),
  классУч: DS.belongsTo('i-i-s-proekt-класс-уч', { inverse: null, async: false }),
  номер: DS.belongsTo('i-i-s-proekt-номер', { inverse: null, async: false }),
  справРод: DS.belongsTo('i-i-s-proekt-справ-род', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРожд: {
    descriptionKey: 'models.i-i-s-proekt-справ-уч.validations.датаРожд.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  фио: {
    descriptionKey: 'models.i-i-s-proekt-справ-уч.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классУч: {
    descriptionKey: 'models.i-i-s-proekt-справ-уч.validations.классУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-proekt-справ-уч.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-proekt-справ-уч.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправУчE', 'i-i-s-proekt-справ-уч', {
    фио: attr('Фио ученика', { index: 0 }),
    датаРожд: attr('Дата рождения', { index: 1 }),
    классУч: belongsTo('i-i-s-proekt-класс-уч', 'Класс ученика', {
      назв: attr('Класс Ученика', { index: 3 })
    }, { index: 2 }),
    справРод: belongsTo('i-i-s-proekt-справ-род', 'Фио родителя', {
      фио: attr('Фио родителя', { index: 5 })
    }, { index: 4 }),
    номер: belongsTo('i-i-s-proekt-номер', 'Номер карты', {
      наименование: attr('Номер карты', { index: 7 })
    }, { index: 6 })
  });

  modelClass.defineProjection('СправУчL', 'i-i-s-proekt-справ-уч', {
    фио: attr('Фио', { index: 0 }),
    датаРожд: attr('Дата рождения', { index: 1 }),
    классУч: belongsTo('i-i-s-proekt-класс-уч', 'Класс ученика', {
      назв: attr('Класс ученика', { index: 2 })
    }, { index: -1, hidden: true }),
    справРод: belongsTo('i-i-s-proekt-справ-род', 'Фио родителя', {
      фио: attr('Фио родителя', { index: 3 })
    }, { index: -1, hidden: true }),
    номер: belongsTo('i-i-s-proekt-номер', 'Номер карты', {
      наименование: attr('Номер карты', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
