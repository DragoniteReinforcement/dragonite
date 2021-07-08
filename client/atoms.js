import { atom } from 'recoil';

const atoms = {};

// URL for iframe display
atoms.events = atom({
  key: 'events',
  default: {},
});

export default atoms;
