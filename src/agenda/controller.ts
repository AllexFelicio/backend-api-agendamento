import { APIGatewayProxyHandler } from 'aws-lambda';
import { getAgendas } from './service';

export const buscarAgendas: APIGatewayProxyHandler = async (event) => {
  const agendas = getAgendas();
  return {
    statusCode: 200,
    body: JSON.stringify({ medicos: agendas }),
  };
};
