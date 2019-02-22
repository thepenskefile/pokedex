import { rgb } from 'polished';
import { faIgloo, faSearch, faClipboard, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
export const theme = {
  palette: {
    water: rgb(88, 122, 240),
    fire: rgb(231, 112, 56),
    electric: rgb(228, 208, 79),
    grass: rgb(171, 183, 107),
    psychic: rgb(227, 99, 226),
    poison: rgb(148, 72, 163),
    bug: rgb(104, 155, 62),
    rock: rgb(99, 98, 84),
    ground: rgb(145, 115, 49),
    fighting: rgb(218, 154, 119),
    dark: rgb(49, 50, 75),
    flying: rgb(173, 216, 230),
    normal: rgb(168, 167, 125),
    fairy: rgb(230, 130, 149),
    ghost: rgb(108, 90, 147),
    steel: rgb(184, 184, 206),
    ice: rgb(166, 214, 215),
    dragon: rgb(104, 66, 239),
    spicy: rgb(231, 112, 56),
    dry: rgb(88, 122, 240),
    bitter: rgb(171, 183, 107),
    sweet: rgb(230, 130, 149),
    sour: rgb(228, 208, 79),
    'generation-1': rgb(228, 208, 79),
    'generation-2': rgb(184, 184, 206),
    'generation-3': rgb(171, 183, 107),
    'generation-4': rgb(230, 130, 149),
    'generation-5': rgb(166, 214, 215),
    'generation-6': rgb(88, 122, 240),
    'generation-7': rgb(231, 112, 56)
  },
  Icon: {
    iconSets: [
      {
        icons: [faIgloo, faSearch, faClipboard, faThumbsUp, faTimes],
        prefix: 'solid-',
        type: 'font-awesome'
      },
      {
        icons: [faAddressBook],
        prefix: 'regular-',
        type: 'font-awesome'
      }
    ]
  }
};
