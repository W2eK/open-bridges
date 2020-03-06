const parser = str => {
  const [hours, minutes] = str.split(':').map(n => parseInt(n));
  return hours * 60 + minutes;
};
const FROM = parser('0:30');
const TO = parser('6:30');
const LOWER = parser('9:00');
const DAY = parser('24:00');
export const DURATION = TO - FROM;
export const parseTime = str => parser(str) - FROM;
export const scaler = t => (t > LOWER ? t - DAY : t) / DURATION;