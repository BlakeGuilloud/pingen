const comparePins = (user = {}, body = {}) => {
  if (user.pin !== body.pin) {
    return new Error('Wrong pin');
  }

  return { message: 'Success', user };
};

const generatePin = () =>
  'xxxxxx'.replace(/x/g, () =>
    (Math.random() * 36 | 0).toString(36));

module.exports = {
  comparePins,
  generatePin,
};