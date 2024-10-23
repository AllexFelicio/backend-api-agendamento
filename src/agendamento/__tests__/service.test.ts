
import { marcarConsulta } from '../service';

describe('marcarConsulta', () => {
  it('deve marcar um agendamento corretamente', () => {
    const resultado = marcarConsulta({
      medico_id: 1,
      paciente_nome: 'Carlos Almeida',
      data_horario: '2024-10-05 09:00',
    });

    expect(resultado).toEqual({
      medico: 'Dr. João Silva',
      paciente: 'Carlos Almeida',
      data_horario: '2024-10-05 09:00',
    });
  });
});
