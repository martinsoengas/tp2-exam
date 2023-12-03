import User from '../../models/users.model.js';

export const get = async (req, res) => {
  try {
    const users = await User.findAll();

    return res.status(200).send({ success: true, data: users });
  } catch (err) {
    const errMessage = {
      success: false,
      message: [],
    };

    err.errors.forEach((msj) => {
      errMessage.message.push(msj.message);
    });

    return res.status(400).send(errMessage);
  }
};
