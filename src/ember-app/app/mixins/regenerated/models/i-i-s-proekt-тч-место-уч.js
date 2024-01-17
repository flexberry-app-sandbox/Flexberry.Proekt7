import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  справУч: DS.belongsTo('i-i-s-proekt-справ-уч', { inverse: null, async: false }),
  местоУч: DS.belongsTo('i-i-s-proekt-место-уч', { inverse: 'тчМестоУч', async: false })
});

export let ValidationRules = {
  справУч: {
    descriptionKey: 'models.i-i-s-proekt-тч-место-уч.validations.справУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  местоУч: {
    descriptionKey: 'models.i-i-s-proekt-тч-место-уч.validations.местоУч.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчМестоУчE', 'i-i-s-proekt-тч-место-уч', {
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
  });
};
