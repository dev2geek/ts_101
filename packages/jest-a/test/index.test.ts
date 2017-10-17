import JESTA =  require('../src/index');
import {expect} from 'chai';

const jest_a = new JESTA(12);

it('should return yaya', () => {
    // expect(jest_a.ya()).toBe('yaya-12');
    expect(jest_a.ya()).equal('yaya-12');
});