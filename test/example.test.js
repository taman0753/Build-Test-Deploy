const assert = require('assert');
describe('Simple Add Test', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
 it('should return 1', () => {
        assert.equal(6 * 6, 1);
    });
});
