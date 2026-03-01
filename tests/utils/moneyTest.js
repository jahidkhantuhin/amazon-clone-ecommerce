import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('format currency from cents', () => {
        expect(formatCurrency(1234)).toEqual('12.34');
    })

    it('works with zero', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    })
    it('works with negative values', () => {
        expect(formatCurrency(-5678)).toEqual('-56.78');
    })
    it('handles non-numeric input gracefully', () => {
        expect(formatCurrency('abc')).toEqual('NaN');
    })
    it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  })
})