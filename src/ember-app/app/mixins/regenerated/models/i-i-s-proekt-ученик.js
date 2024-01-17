import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  приходУход: DS.belongsTo('i-i-s-proekt-приход-уход', { inverse: null, async: false }),
  просмотр: DS.belongsTo('i-i-s-proekt-просмотр', { inverse: 'ученик', async: false })
});

export let ValidationRules = {
  приходУход: {
    descriptionKey: 'models.i-i-s-proekt-ученик.validations.приходУход.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  просмотр: {
    descriptionKey: 'models.i-i-s-proekt-ученик.validations.просмотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УченикE', 'i-i-s-proekt-ученик', {
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
  });
};
