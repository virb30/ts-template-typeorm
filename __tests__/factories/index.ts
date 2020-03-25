import { EntityFactory } from '@entity-factory/core';
import { TypeormAdapter } from '@entity-factory/typeorm';

import { ExampleBlueprint } from './ExampleBlueprint';

const adapter = new TypeormAdapter();

export default new EntityFactory({
  blueprints: [ExampleBlueprint],
  adapter,
});
