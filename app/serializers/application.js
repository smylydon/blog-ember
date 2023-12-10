import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  primaryKey = 'id';

  // This is need because of the fake backend, others all new posts will have id of 101
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // payload.data.attributes.amount = payload.data.attributes.cost.amount;
    // payload.data.attributes.currency = payload.data.attributes.cost.currency;

    // delete payload.data.attributes.cost;

    if (payload && payload.id) {
      if (payload.id === 101) {
        payload.id = new Date().getTime();
      }
    }

    return super.normalizeResponse(...arguments);
  }
}
