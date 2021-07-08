import { atom } from 'recoil';

const atoms = {};

atoms.events = atom({
  key: 'events',
  default: {},
});

atoms.userInfo = atom({
  key: 'userInfo',
  default: {
    username: '',
    userId: 0,
  },
});

atoms.userTasks = atom({
  key: 'userTasks',
  default: [],
});

export default atoms;
