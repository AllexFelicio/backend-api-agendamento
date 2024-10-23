import { mockAgendas } from '../agenda/mocks';
import { MarcarAgendamentoDTO } from './dto';

export const marcarConsulta = (dados: MarcarAgendamentoDTO) => {
  const medico = mockAgendas().find((medico) => medico.id === dados.medico_id);
  if (!medico) {
    throw new Error('Médico não encontrado');
  }

  return {
    medico: medico.nome,
    paciente: dados.paciente_nome,
    data_horario: dados.data_horario,
  };
};
