import User from '../../models/users.model.js';

export const create = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = {
      name,
      email,
    };

    await User.create(newUser);

    return res.status(201).json({ success: true, data: newUser });
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
