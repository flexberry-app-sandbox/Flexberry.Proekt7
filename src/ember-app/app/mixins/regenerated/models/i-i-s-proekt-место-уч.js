import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справСотр: DS.belongsTo('i-i-s-proekt-справ-сотр', { inverse: null, async: false }),
  тчМестоУч: DS.hasMany('i-i-s-proekt-тч-место-уч', { inverse: 'местоУч', async: false })
});

export let ValidationRules = {
  справСотр: {
    descriptionKey: 'models.i-i-s-proekt-место-уч.validations.справСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчМестоУч: {
    descriptionKey: 'models.i-i-s-proekt-место-уч.validations.тчМестоУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МестоУчE', 'i-i-s-proekt-место-уч', {
    справСотр: belongsTo('i-i-s-proekt-справ-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 1 }),
      справДолж: belongsTo('i-i-s-proekt-справ-долж', '', {
        должность: attr('Должность', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фио сотрудника' }),
    тчМестоУч: hasMany('i-i-s-proekt-тч-место-уч', 'Ученики класса', {
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
      }, { index: 0, displayMemberPath: 'фио ученика' })
    })
  });

  modelClass.defineProjection('МестоУчL', 'i-i-s-proekt-место-уч', {
    справСотр: belongsTo('i-i-s-proekt-справ-сотр', 'Фио сотрудника', {
      фио: attr('Фио сотрудника', { index: 0 }),
      справДолж: belongsTo('i-i-s-proekt-справ-долж', '', {
        должность: attr('Должность', { index: 1 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
