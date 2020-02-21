const parser = str => {
  const [hours, minutes] = str.split(':').map(n => parseInt(n));
  return hours * 60 + minutes;
};
export const FROM = parser('0:30');
export const TO = parser('6:30');
export const DURATION = TO - FROM;

export const parseTime = str => parser(str) - FROM;