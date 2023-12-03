import User from '../../models/users.model.js';

export const updateByID = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('Error al modificar');
    }

    await User.update({ name, email }, { where: { id } });

    return res.status(200).send({
      success: true,
      data: 1,
      message: 'modificado',
    });
  } catch (err) {
    if (err.message === 'Error al modificar') {
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
