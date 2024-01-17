import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-класс-уч-l');
  this.route('i-i-s-proekt-класс-уч-e',
  { path: 'i-i-s-proekt-класс-уч-e/:id' });
  this.route('i-i-s-proekt-класс-уч-e.new',
  { path: 'i-i-s-proekt-класс-уч-e/new' });
  this.route('i-i-s-proekt-место-уч-l');
  this.route('i-i-s-proekt-место-уч-e',
  { path: 'i-i-s-proekt-место-уч-e/:id' });
  this.route('i-i-s-proekt-место-уч-e.new',
  { path: 'i-i-s-proekt-место-уч-e/new' });
  this.route('i-i-s-proekt-номер-l');
  this.route('i-i-s-proekt-номер-e',
  { path: 'i-i-s-proekt-номер-e/:id' });
  this.route('i-i-s-proekt-номер-e.new',
  { path: 'i-i-s-proekt-номер-e/new' });
  this.route('i-i-s-proekt-приход-уход-l');
  this.route('i-i-s-proekt-приход-уход-e',
  { path: 'i-i-s-proekt-приход-уход-e/:id' });
  this.route('i-i-s-proekt-приход-уход-e.new',
  { path: 'i-i-s-proekt-приход-уход-e/new' });
  this.route('i-i-s-proekt-просмотр-l');
  this.route('i-i-s-proekt-просмотр-e',
  { path: 'i-i-s-proekt-просмотр-e/:id' });
  this.route('i-i-s-proekt-просмотр-e.new',
  { path: 'i-i-s-proekt-просмотр-e/new' });
  this.route('i-i-s-proekt-расписание-l');
  this.route('i-i-s-proekt-расписание-e',
  { path: 'i-i-s-proekt-расписание-e/:id' });
  this.route('i-i-s-proekt-расписание-e.new',
  { path: 'i-i-s-proekt-расписание-e/new' });
  this.route('i-i-s-proekt-справ-долж-l');
  this.route('i-i-s-proekt-справ-долж-e',
  { path: 'i-i-s-proekt-справ-долж-e/:id' });
  this.route('i-i-s-proekt-справ-долж-e.new',
  { path: 'i-i-s-proekt-справ-долж-e/new' });
  this.route('i-i-s-proekt-справ-род-l');
  this.route('i-i-s-proekt-справ-род-e',
  { path: 'i-i-s-proekt-справ-род-e/:id' });
  this.route('i-i-s-proekt-справ-род-e.new',
  { path: 'i-i-s-proekt-справ-род-e/new' });
  this.route('i-i-s-proekt-справ-сотр-l');
  this.route('i-i-s-proekt-справ-сотр-e',
  { path: 'i-i-s-proekt-справ-сотр-e/:id' });
  this.route('i-i-s-proekt-справ-сотр-e.new',
  { path: 'i-i-s-proekt-справ-сотр-e/new' });
  this.route('i-i-s-proekt-справ-уч-l');
  this.route('i-i-s-proekt-справ-уч-e',
  { path: 'i-i-s-proekt-справ-уч-e/:id' });
  this.route('i-i-s-proekt-справ-уч-e.new',
  { path: 'i-i-s-proekt-справ-уч-e/new' });
});

export default Router;
