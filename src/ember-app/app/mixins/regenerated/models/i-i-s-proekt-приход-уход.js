import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  врПриУх: DS.attr('string'),
  статус: DS.attr('i-i-s-proekt-статус'),
  расписание: DS.belongsTo('i-i-s-proekt-расписание', { inverse: null, async: false }),
  справУч: DS.belongsTo('i-i-s-proekt-справ-уч', { inverse: null, async: false })
});

export let ValidationRules = {
  врПриУх: {
    descriptionKey: 'models.i-i-s-proekt-приход-уход.validations.врПриУх.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-proekt-приход-уход.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расписание: {
    descriptionKey: 'models.i-i-s-proekt-приход-уход.validations.расписание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  справУч: {
    descriptionKey: 'models.i-i-s-proekt-приход-уход.validations.справУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриходУходE', 'i-i-s-proekt-приход-уход', {
    справУч: belongsTo('i-i-s-proekt-справ-уч', 'Фио ученика', {
      фио: attr('Фио ученика', { index: 1 }),
      классУч: belongsTo('i-i-s-proekt-класс-уч', '', {
        назв: attr('Класс ученика', { index: 2 })
      }, { index: -1, hidden: true }),
      номер: belongsTo('i-i-s-proekt-номер', '', {
        наименование: attr('Номер карты', { index: 3 })
      }, { index: -1, hidden: true }),
      справРод: belongsTo('i-i-s-proekt-справ-род', '', {
        фио: attr('Фио родителя', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио ученика' }),
    расписание: belongsTo('i-i-s-proekt-расписание', 'Расписание уроков', {
      урок: attr('Номер урока', { index: 6 }),
      периодОт: attr('Расписание От', { index: 7 }),
      периодДо: attr('Расписание До', { index: 8 })
    }, { index: 5, displayMemberPath: 'номер урока' }),
    статус: attr('Статус', { index: 9 }),
    врПриУх: attr('Время прихода/ухода', { index: 10 })
  });

  modelClass.defineProjection('ПриходУходL', 'i-i-s-proekt-приход-уход', {
    статус: attr('Статус', { index: 0 }),
    справУч: belongsTo('i-i-s-proekt-справ-уч', 'Фио ученика', {
      фио: attr('Фио ученика', { index: 1 }),
      классУч: belongsTo('i-i-s-proekt-класс-уч', '', {
        назв: attr('Класс ученика', { index: 2 })
      }, { index: -1, hidden: true }),
      номер: belongsTo('i-i-s-proekt-номер', '', {
        наименование: attr('Номер карты', { index: 3 })
      }, { index: -1, hidden: true }),
      справРод: belongsTo('i-i-s-proekt-справ-род', '', {
        фио: attr('Фио родителя', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    расписание: belongsTo('i-i-s-proekt-расписание', 'Период От', {
      периодОт: attr('Период От', { index: 5 }),
      периодДо: attr('Период До', { index: 6 }),
      урок: attr('Номер урока', { index: 7 })
    }, { index: -1, hidden: true }),
    врПриУх: attr('Время прихода/ухода', { index: 8 })
  });
};
