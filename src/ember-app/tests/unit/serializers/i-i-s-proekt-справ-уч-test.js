import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proekt-справ-уч', 'Unit | Serializer | i-i-s-proekt-справ-уч', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proekt-справ-уч',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proekt-статус',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
