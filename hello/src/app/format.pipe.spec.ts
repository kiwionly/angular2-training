import { FormatPipe } from './format.pipe';

fdescribe('FormatPipe', () => {
  it('return #0001 if input is 1', () => {
    const pipe = new FormatPipe();
    const result = pipe.transform('1');
    expect(result).toBe('#00001');
  });

});
