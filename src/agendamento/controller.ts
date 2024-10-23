import { APIGatewayProxyHandler } from 'aws-lambda';
import { marcarConsulta } from './service';
import { MarcarAgendamentoDTO } from './dto';

export const marcarAgendamento: APIGatewayProxyHandler = async (event) => {
  const body: MarcarAgendamentoDTO = JSON.parse(event.body || '{}');
  
  if (!body.medico_id || !body.paciente_nome || !body.data_horario) {
    return {
      statusCode: 400,
      body: JSON.stringify({ mensagem: 'Dados inválidos' }),
    };
  }

  const agendamento = marcarConsulta(body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: 'Agendamento realizado com sucesso',
      agendamento,
    }),
  };
};
