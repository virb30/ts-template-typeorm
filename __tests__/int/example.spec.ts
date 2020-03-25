import { getConnection } from 'typeorm';

import createTypeormConn from '../../src/database';
import truncate from '../util/truncate';

describe('Example', () => {
  beforeEach(async () => {
    await createTypeormConn();
    await truncate();
  });

  afterEach(async () => {
    await getConnection().close();
  });

  it('should return the sum of two numbers', () => {
    expect(5 + 4).toBe(9);
  });
});
