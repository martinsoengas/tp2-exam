import User from '../../models/users.model.js';

export const getByID = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('No se encontro el usuario');
    }

    return res.status(200).send({ success: true, data: user });
  } catch (err) {
    if (err.message === 'No se encontro el usuario') {
      return res.status(404).send({ success: false, message: err.message });
    } else {
      const errMessage = {
        success: false,
        message: [],
      };

      err.errors.forEach((msj) => {
        errMessage.message.push(msj.message);
      });

      return res.status(400).send(errMessage);
    }
  }
};
