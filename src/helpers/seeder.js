import User from '../models/users.model.js';

async function seeder() {
  try {
    for (let id = 1; id < 6; id++) {
      await User.create({
        name: `user${id}`,
        email: `user${id}@email.com`,
      });
    }

    console.log('Tables filled successfully');
  } catch (error) {
    console.error('There was an error filling the tables', error);
  }
}

export default seeder;
