import Voto from '../../models/votos.model.js';

export const create = async (req, res) => {
  try {
    const { distrito, candidato } = req.body;

    const validDistricts = ['zona1', 'zona2', 'zona3', 'zona4'];
    const validCandidates = [
      'candidatoA',
      'candidatoB',
      'candidatoC',
      'enblanco',
    ];

    let errorMessage = '';

    if (!validDistricts.includes(distrito)) {
      errorMessage += 'zona no correspondiente';
    }

    if (!validCandidates.includes(candidato)) {
      if (errorMessage.length > 0) {
        errorMessage += ' y ';
      }
      errorMessage += 'candidato no válido';
    }

    if (errorMessage.length > 0) {
      return res.status(400).send(errorMessage);
    }

    const newVoto = {
      distrito,
      candidato,
    };

    await Voto.create(newVoto);

    return res.status(201).send('voto cargado');
  } catch (err) {
    console.log(err);
  }
};
