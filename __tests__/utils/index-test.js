import { millisecondsToTime } from '../../src/utils';

describe('millisecondsToTime', () => {
  it('should return time', () => {
    const result = millisecondsToTime(360000);
    expect(result).toBe('06:00');
  });
});
