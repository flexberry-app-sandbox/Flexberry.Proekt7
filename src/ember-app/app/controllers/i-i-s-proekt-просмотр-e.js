import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-proekt-просмотр-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-proekt-ученик+приходУход':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фио ученика',
            required: true,
            relationName: 'приходУход',
            projection: 'ПриходУходL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
