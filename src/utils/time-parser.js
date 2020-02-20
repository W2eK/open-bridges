export const parseTime = str => {
  const [hours, minutes] = str.split(':').map(n => parseInt(n));
  return hours * 60 + minutes;
};
export const FROM = parseTime('0:00');
export const TO = parseTime('6:00');
export const DURATION = TO - FROM;