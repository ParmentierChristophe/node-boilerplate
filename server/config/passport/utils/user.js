import models from '../../../../database/models';

export const loginUser = async args => {
  if (!args.email || !args.password) throw new Error('Wrong credentials');

  let user = await models.User.findOne({ where: { email: args.email } });

  return {
    id: user.id,
    email: user.email
  };
};
