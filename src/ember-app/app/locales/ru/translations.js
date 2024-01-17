import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProektКлассУчLForm from './forms/i-i-s-proekt-класс-уч-l';
import IISProektМестоУчLForm from './forms/i-i-s-proekt-место-уч-l';
import IISProektНомерLForm from './forms/i-i-s-proekt-номер-l';
import IISProektПриходУходLForm from './forms/i-i-s-proekt-приход-уход-l';
import IISProektПросмотрLForm from './forms/i-i-s-proekt-просмотр-l';
import IISProektРасписаниеLForm from './forms/i-i-s-proekt-расписание-l';
import IISProektСправДолжLForm from './forms/i-i-s-proekt-справ-долж-l';
import IISProektСправРодLForm from './forms/i-i-s-proekt-справ-род-l';
import IISProektСправСотрLForm from './forms/i-i-s-proekt-справ-сотр-l';
import IISProektСправУчLForm from './forms/i-i-s-proekt-справ-уч-l';
import IISProektКлассУчEForm from './forms/i-i-s-proekt-класс-уч-e';
import IISProektМестоУчEForm from './forms/i-i-s-proekt-место-уч-e';
import IISProektНомерEForm from './forms/i-i-s-proekt-номер-e';
import IISProektПриходУходEForm from './forms/i-i-s-proekt-приход-уход-e';
import IISProektПросмотрEForm from './forms/i-i-s-proekt-просмотр-e';
import IISProektРасписаниеEForm from './forms/i-i-s-proekt-расписание-e';
import IISProektСправДолжEForm from './forms/i-i-s-proekt-справ-долж-e';
import IISProektСправРодEForm from './forms/i-i-s-proekt-справ-род-e';
import IISProektСправСотрEForm from './forms/i-i-s-proekt-справ-сотр-e';
import IISProektСправУчEForm from './forms/i-i-s-proekt-справ-уч-e';
import IISProektКлассУчModel from './models/i-i-s-proekt-класс-уч';
import IISProektМестоУчModel from './models/i-i-s-proekt-место-уч';
import IISProektНомерModel from './models/i-i-s-proekt-номер';
import IISProektПриходУходModel from './models/i-i-s-proekt-приход-уход';
import IISProektПросмотрModel from './models/i-i-s-proekt-просмотр';
import IISProektРасписаниеModel from './models/i-i-s-proekt-расписание';
import IISProektСправДолжModel from './models/i-i-s-proekt-справ-долж';
import IISProektСправРодModel from './models/i-i-s-proekt-справ-род';
import IISProektСправСотрModel from './models/i-i-s-proekt-справ-сотр';
import IISProektСправУчModel from './models/i-i-s-proekt-справ-уч';
import IISProektТчМестоУчModel from './models/i-i-s-proekt-тч-место-уч';
import IISProektУченикModel from './models/i-i-s-proekt-ученик';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-класс-уч': IISProektКлассУчModel,
    'i-i-s-proekt-место-уч': IISProektМестоУчModel,
    'i-i-s-proekt-номер': IISProektНомерModel,
    'i-i-s-proekt-приход-уход': IISProektПриходУходModel,
    'i-i-s-proekt-просмотр': IISProektПросмотрModel,
    'i-i-s-proekt-расписание': IISProektРасписаниеModel,
    'i-i-s-proekt-справ-долж': IISProektСправДолжModel,
    'i-i-s-proekt-справ-род': IISProektСправРодModel,
    'i-i-s-proekt-справ-сотр': IISProektСправСотрModel,
    'i-i-s-proekt-справ-уч': IISProektСправУчModel,
    'i-i-s-proekt-тч-место-уч': IISProektТчМестоУчModel,
    'i-i-s-proekt-ученик': IISProektУченикModel
  },

  'application-name': 'Proekt',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt',
          title: 'Proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        администратор: {
          caption: 'Администратор',
          title: 'Администратор',
          'i-i-s-proekt-справ-сотр-l': {
            caption: 'Справочник сотрудники',
            title: ''
          },
          'i-i-s-proekt-справ-долж-l': {
            caption: 'Справочник должности',
            title: ''
          },
          'i-i-s-proekt-класс-уч-l': {
            caption: 'Справочник классы',
            title: ''
          },
          'i-i-s-proekt-номер-l': {
            caption: 'Номер карты',
            title: ''
          },
          'i-i-s-proekt-справ-род-l': {
            caption: 'Справочник родители',
            title: ''
          },
          'i-i-s-proekt-справ-уч-l': {
            caption: 'Справочник ученики',
            title: ''
          },
          'i-i-s-proekt-расписание-l': {
            caption: 'Расписание ученика',
            title: ''
          },
          'i-i-s-proekt-место-уч-l': {
            caption: 'Класс ученика',
            title: ''
          }
        },
        ученик: {
          caption: 'Ученик',
          title: 'Ученик',
          'i-i-s-proekt-приход-уход-l': {
            caption: 'Функция: регистрация прихода/ухода ученика',
            title: ''
          }
        },
        родители: {
          caption: 'Родители',
          title: 'Родители',
          'i-i-s-proekt-просмотр-l': {
            caption: 'Функция: контроль и просмотр прихода/ухода ученика',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proekt-класс-уч-l': IISProektКлассУчLForm,
    'i-i-s-proekt-место-уч-l': IISProektМестоУчLForm,
    'i-i-s-proekt-номер-l': IISProektНомерLForm,
    'i-i-s-proekt-приход-уход-l': IISProektПриходУходLForm,
    'i-i-s-proekt-просмотр-l': IISProektПросмотрLForm,
    'i-i-s-proekt-расписание-l': IISProektРасписаниеLForm,
    'i-i-s-proekt-справ-долж-l': IISProektСправДолжLForm,
    'i-i-s-proekt-справ-род-l': IISProektСправРодLForm,
    'i-i-s-proekt-справ-сотр-l': IISProektСправСотрLForm,
    'i-i-s-proekt-справ-уч-l': IISProektСправУчLForm,
    'i-i-s-proekt-класс-уч-e': IISProektКлассУчEForm,
    'i-i-s-proekt-место-уч-e': IISProektМестоУчEForm,
    'i-i-s-proekt-номер-e': IISProektНомерEForm,
    'i-i-s-proekt-приход-уход-e': IISProektПриходУходEForm,
    'i-i-s-proekt-просмотр-e': IISProektПросмотрEForm,
    'i-i-s-proekt-расписание-e': IISProektРасписаниеEForm,
    'i-i-s-proekt-справ-долж-e': IISProektСправДолжEForm,
    'i-i-s-proekt-справ-род-e': IISProektСправРодEForm,
    'i-i-s-proekt-справ-сотр-e': IISProektСправСотрEForm,
    'i-i-s-proekt-справ-уч-e': IISProektСправУчEForm
  },

});

export default translations;
