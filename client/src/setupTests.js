import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.context = (description, fn) => describe(description, fn);
global.mixpanel = { track: () => {} };

configure({ adapter: new Adapter() });
