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

atoms.scores = atom({
  key: 'scores',
  default: {
    username: '',
    score: 0,
  },
});

export default atoms;
