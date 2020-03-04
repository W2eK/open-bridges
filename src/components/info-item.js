import React, { useContext } from 'react';

import LabelContext from '../hooks/label-context';
import InfoBorder from './info-border';
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

const calc = (a, b = 0, c = 0) => `calc(3em * ${a} + 2em * ${b} + 4em * ${c})`;

const InfoItem = props => {
  const labels = useContext(LabelContext);
  const { icon, label, border, id } = props;
  const source = !border ? labels.get(id) : null;

  switch (true) {
    //   return null
    case id === 5 && label:
      // Центр Города
      return (
        <InfoBox style={{ height: ['27em', '3em'] }} left bottom align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 5 && icon:
      // Центр Города
      return (
        <InfoBox left bottom align="right">
          <InfoIcon label={source} />
        </InfoBox>
      );
    case id === 6 && label:
      // Васильевский остров
      return (
        <InfoBox style={{ height: '13em' }} right bottom align="left">
          <InfoLabel
            label={source}
            style={{
              left: ['0%', '100%'],
              transform: ['translateX(0)', 'translateX(-100%)']
            }}
          />
        </InfoBox>
      );
    case id === 6 && icon:
      // Васильевский остров
      return (
        <InfoBox right bottom align="left">
          <InfoIcon
            label={source}
            style={{
              left: ['0%', '100%'],
              transform: ['translateX(0)', 'translateX(-100%)']
            }}
          />
        </InfoBox>
      );
    case id === 7 && label:
      // Петроградская сторона
      return (
        <InfoBox style={{ height: ['3em', '27em'] }} right bottom align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 8 && label:
      // Выборгская сторона
      return (
        <InfoBox style={{ height: '3em' }} right top align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 9:
      // Пески
      return (
        <InfoBox style={{ height: '13em' }} left top align="right">
          <InfoIcon label={source} />
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 10:
      // Обухово
      return (
        <InfoBox style={{ height: '3em' }} left bottom align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 11 && label:
      // Гутуевский остров
      return (
        <InfoBox style={{ height: '3em', top: [0, calc(1, 1)], left: [0, '-5em'], opacity: [1, 0] }} left top align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 13 && label:
      // Старая Деревня
      return (
        <InfoBox style={{ height: '3em', top: [calc(-1, -1), 0], right: ['-5em', 0], opacity: [0, 1] }} right top align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 'bottom-left' && border:
      return <InfoBorder bottom left style={{height: [calc(8, 5, 2), calc(6, 4, 1)]}}/>
    case id === 'bottom-right' && border:
      return <InfoBorder bottom right style={{height: calc(5, 4)}}/>
    case id === 'center-right' && border:
      return <InfoBorder bottom right style={{height: [calc(1), calc(4, 2, 1)]}}/>
    case id === 'top-right' && border:
      return <InfoBorder top right style={{height: [calc(3, 2), calc(1)]}}/>
    case id === 'top-left' && border:
      return <InfoBorder top left style={{height: [calc(1), calc(4, 3)]}}/>
    default:
      return null;
  }
};

export default InfoItem;
