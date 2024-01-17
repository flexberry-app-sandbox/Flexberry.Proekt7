import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фио: DS.attr('string'),
  справДолж: DS.belongsTo('i-i-s-proekt-справ-долж', { inverse: null, async: false })
});

export let ValidationRules = {
  фио: {
    descriptionKey: 'models.i-i-s-proekt-справ-сотр.validations.фио.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  справДолж: {
    descriptionKey: 'models.i-i-s-proekt-справ-сотр.validations.справДолж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СправСотрE', 'i-i-s-proekt-справ-сотр', {
    фио: attr('Фио сотрудника', { index: 0 }),
    справДолж: belongsTo('i-i-s-proekt-справ-долж', 'Должности', {
      должность: attr('Должности', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('СправСотрL', 'i-i-s-proekt-справ-сотр', {
    фио: attr('Фио сотрудника', { index: 0 }),
    справДолж: belongsTo('i-i-s-proekt-справ-долж', 'Должности', {
      должность: attr('Должности', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
