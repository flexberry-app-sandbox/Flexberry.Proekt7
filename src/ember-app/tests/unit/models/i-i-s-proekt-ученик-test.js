import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-ученик', 'Unit | Model | i-i-s-proekt-ученик', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proekt-класс-уч',
    'model:i-i-s-proekt-место-уч',
    'model:i-i-s-proekt-номер',
    'model:i-i-s-proekt-приход-уход',
    'model:i-i-s-proekt-просмотр',
    'model:i-i-s-proekt-расписание',
    'model:i-i-s-proekt-справ-долж',
    'model:i-i-s-proekt-справ-род',
    'model:i-i-s-proekt-справ-сотр',
    'model:i-i-s-proekt-справ-уч',
    'model:i-i-s-proekt-тч-место-уч',
    'model:i-i-s-proekt-ученик',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
