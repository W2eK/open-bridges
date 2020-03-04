import React from 'react';
import InfoBox from './info-box';
import InfoLabel from './info-label';
import InfoIcon from './info-icon';

/*
1 Большая Нева
2 Малая Нева
3 Нева
4 Большая Невка
5 Центр Города
6 Васильевский остров
7 Петроградская сторона
8 Выборгская сторона
9 Пески
10 Обухово
11 Гутуевский остров
12 Приморская
13 Старая Деревня
*/

const InfoItem = props => {
  const {
    source,
    source: { id },
    icon,
    label
  } = props;
  console.log(id)
  switch (true) {
    case id == 5 && label:
      // Центр Города
      return (
        <InfoBox style={{ height: ['27em', '3em'] }} left bottom align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id == 5 && icon:
      // Центр Города
      return (
        <InfoBox left bottom align="right">
          <InfoIcon label={source} />
        </InfoBox>
      );
    case id == 6 && label:
      // Васильевский остров
      return (
        <InfoBox style={{ height: '13em' }} right bottom align="left">
          <InfoLabel label={source} style={{ left: ['0%', '100%'], transform: ['translateX(0)', 'translateX(-100%)'] }}/>
        </InfoBox>
      );
    case id == 6 && icon:
      // Васильевский остров
      return (
        <InfoBox right bottom align="left">
          <InfoIcon label={source} style={{ left: ['0%', '100%'], transform: ['translateX(0)', 'translateX(-100%)']}}/>
        </InfoBox>
      );
    case id == 7 && label:
      // Петроградская сторона
      return (
        <InfoBox style={{ height: ['3em', '27em'] }} right bottom align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id == 8 && label:
      // Выборгская сторона
      return (
        <InfoBox style={{ height: '3em' }} right top align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id == 9:
      // Пески
      return (
        <InfoBox style={{ height: '13em' }} left top align="right">
          <InfoIcon label={source} />
          <InfoLabel label={source} />
        </InfoBox>
      )
    case id == 10:
      // Обухово
      return (
        <InfoBox style={{ height: '3em' }} left bottom align="right">
          <InfoLabel label={source} />
        </InfoBox>
      )
    case id == 11 && label:
      // Гутуевский остров
      return (
        <InfoBox style={{ height: ['3em', '13em'] }} left top align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    default:
      return null;
  }
};

export default InfoItem;
