import { Dimensions } from 'react-native';

const sh = size => size / 640;
const sw = size => size / 360;

const vh = Dimensions.get('window').height;
const vw = Dimensions.get('window').width;

export { vh, vw, sh, sw };
