import { Connection, getConnectionOptions, createConnection } from 'typeorm';
import Example from '../app/models/Example';

export const models = [Example];

const createTypeormConn = async (): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();
  return createConnection({ ...connectionOptions, name: 'default' });
};

export default createTypeormConn;
