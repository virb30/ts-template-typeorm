import { DeleteResult } from 'typeorm';
import { models } from '../../src/database';

export default function truncate(): Promise<DeleteResult[]> {
  return Promise.all(
    Object.keys(models).map(key => {
      return models[Number(key)].delete({});
    }),
  );
}
