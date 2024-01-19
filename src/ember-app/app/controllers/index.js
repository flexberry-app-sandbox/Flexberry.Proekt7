import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.администратор.caption'),
          title: i18n.t('forms.application.sitemap.администратор.title'),
          children: [{
            link: 'i-i-s-proekt-справ-сотр-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-сотр-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proekt-справ-долж-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-долж-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-долж-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proekt-класс-уч-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-класс-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-класс-уч-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-proekt-номер-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-номер-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-номер-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proekt-справ-род-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-род-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-род-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proekt-справ-уч-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-справ-уч-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proekt-расписание-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-расписание-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-расписание-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-proekt-место-уч-l',
            caption: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-место-уч-l.caption'),
            title: i18n.t('forms.application.sitemap.администратор.i-i-s-proekt-место-уч-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ученик.caption'),
          title: i18n.t('forms.application.sitemap.ученик.title'),
          children: [{
            link: 'i-i-s-proekt-приход-уход-l',
            caption: i18n.t('forms.application.sitemap.ученик.i-i-s-proekt-приход-уход-l.caption'),
            title: i18n.t('forms.application.sitemap.ученик.i-i-s-proekt-приход-уход-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.родители.caption'),
          title: i18n.t('forms.application.sitemap.родители.title'),
          children: [{
            link: 'i-i-s-proekt-просмотр-l',
            caption: i18n.t('forms.application.sitemap.родители.i-i-s-proekt-просмотр-l.caption'),
            title: i18n.t('forms.application.sitemap.родители.i-i-s-proekt-просмотр-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})