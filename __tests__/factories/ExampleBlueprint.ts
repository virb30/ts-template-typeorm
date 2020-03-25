import { TypeormBlueprint } from '@entity-factory/typeorm';
import Example from '../../src/app/models/Example';

export class ExampleBlueprint extends TypeormBlueprint<Example> {
  constructor() {
    super();

    this.options({
      generateId: true,
      idAttribute: 'id',
    });

    this.type(Example);

    this.define(async ({ faker, factory }) => ({
      name: faker.lorem.slug(),
    }));
  }
}
