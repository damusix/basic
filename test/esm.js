import * as Code from '@hapi/code';
import * as Lab from '@hapi/lab';


const lab = Lab.script();
const { before, describe, it } = lab;
const expect = Code.expect;
export { lab };


describe('import()', () => {

    let Basic;

    before(async () => {

        Basic = await import('../lib/index.js');
    });

    it('exposes all methods and classes as named imports', () => {

        expect(Object.keys(Basic)).to.equal([
            'plugin'
        ]);
    });
});
