export default class PostDateTransform {
  deserialize(serialized) {
    console.log('date transform deserialize', serialized);
    return new Date().toISOString();
  }

  serialize(deserialized) {
    console.log('date transform serialize', deserialized);
    return new Date().toISOString();
  }

  static create() {
    return new this();
  }
}
