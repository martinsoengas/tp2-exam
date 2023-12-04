import Voto from '../../models/votos.model.js';

export const getAll = async (req, res) => {
  try {
    const votes = await Voto.findAll();

    const response = votes.reduce((acc, vote) => {
      if (!acc[vote.distrito]) {
        acc[vote.distrito] = {
          candidatoA: 0,
          candidatoB: 0,
          candidatoC: 0,
          enblanco: 0,
        };
      }

      acc[vote.distrito][vote.candidato]++;

      return acc;
    }, {});

    res.json(response);
  } catch (error) {
    res.status(500).send('Error al obtener los votos por zona');
  }
};
