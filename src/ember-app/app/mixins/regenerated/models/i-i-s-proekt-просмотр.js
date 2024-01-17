import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  справРод: DS.belongsTo('i-i-s-proekt-справ-род', { inverse: null, async: false }),
  ученик: DS.hasMany('i-i-s-proekt-ученик', { inverse: 'просмотр', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-proekt-просмотр.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  справРод: {
    descriptionKey: 'models.i-i-s-proekt-просмотр.validations.справРод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-proekt-просмотр.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПросмотрE', 'i-i-s-proekt-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-proekt-справ-род', 'Фио родителя', {
      фио: attr('Фио родителя', { index: 2 })
    }, { index: 1 }),
    ученик: hasMany('i-i-s-proekt-ученик', 'Ученик', {
      приходУход: belongsTo('i-i-s-proekt-приход-уход', 'Приход и уход ученика', {
        справУч: belongsTo('i-i-s-proekt-справ-уч', '', {
          фио: attr('Фио ученика', { index: 1 }),
          классУч: belongsTo('i-i-s-proekt-класс-уч', '', {
            назв: attr('Класс ученика', { index: 2 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        расписание: belongsTo('i-i-s-proekt-расписание', '', {
          урок: attr('Номер урока', { index: 3 }),
          периодОт: attr('Приход От', { index: 4 }),
          периодДо: attr('Приход До', { index: 5 })
        }, { index: -1, hidden: true }),
        статус: attr('Статус Прихода/Ухода', { index: 6 }),
        врПриУх: attr('Время Прихода/Ухода', { index: 7 })
      }, { index: 0, displayMemberPath: 'фио ученика' })
    })
  });

  modelClass.defineProjection('ПросмотрL', 'i-i-s-proekt-просмотр', {
    время: attr('Время', { index: 0 }),
    справРод: belongsTo('i-i-s-proekt-справ-род', 'Фио родителя', {
      фио: attr('Фио родителя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
