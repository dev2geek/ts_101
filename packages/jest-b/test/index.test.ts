import JESTB from '../src/index';
import {expect} from 'chai';

const jest_b = new JESTB(12);

it('should return yoyo', () => {
    // expect(jest_b.yo()).toBe('yoyo-12');
    expect(jest_b.yo()).equal('yoyo-12');
});