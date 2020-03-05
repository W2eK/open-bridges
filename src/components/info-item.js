import React, { useContext } from 'react';

import LabelContext from '../hooks/label-context';
import InfoArea from './info-area';
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

const InfoItem = props => {
  const labels = useContext(LabelContext);
  const { icon, label, border, area, id } = props;
  const source = !border ? labels.get(id) : null;

  switch (true) {
    case id === 5 && label:
      // Центр Города
      return (
        <InfoBox left align="right" style={{
          bottom: ['1, 0, 1',0],
          height: '3em'
        }}>
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 5 && icon:
      // Центр Города
      return (
        <InfoBox align="right" style={{bottom: '2,0,1', left: [0, '-5em'], opacity: [1, 0]}}>
          <InfoIcon label={source} />
        </InfoBox>
      );
    case id === 6 && label:
      // Васильевский остров
      return (
        <InfoBox
          style={{
            bottom: '2,1,1',
            height: '3em',
            left: ['100%', 0],
            transform: ['translateX(0)', 'translateX(-100%)']
          }}
        >
          <InfoLabel
            label={source}
            style={{
              left: [0, '100%'],
              transform: ['translateX(0)', 'translateX(-100%)']
            }}
          />
        </InfoBox>
      );
    case id === 6 && icon:
      // Васильевский остров
      return (
        <InfoBox
          style={{
            left: 0,
            bottom: '1,0,1',
            left: ['100%', 0],
            transform: ['translateX(0)', 'translateX(-100%)']
          }}
        >
          <InfoIcon
            label={source}
            style={{
              left: [0, '100%'],
              transform: ['translateX(0)', 'translateX(-100%)']
            }}
          />
        </InfoBox>
      );
    case id === 7 && label:
      // Петроградская сторона
      return (
        <InfoBox style={{ height: '3em', bottom: [0, '2,1,1'] }} right align="left">
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
        <InfoBox style={{ height: '3em', top: [0, '1,1'], left: [0, '-5em'], opacity: [1, 0] }} left top align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 13 && label:
      // Старая Деревня
      return (
        <InfoBox style={{ height: '3em', top: ['-1,-1', 0], right: ['-5em', 0], opacity: [0, 1] }} right top align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 'top-left' && area:
      var style = {
        height: '1',
        opacity: [1, 0],
        top: [0, '1,1'],
        left: [0, '-8em']
      }
      return <InfoArea style={style} left align="right"/>
    case id === 'top-right' && area:
      var style = {
        opacity: [0, 1],
        bottom: ['1,1',0],
        right: ['-8em', 0]
      }
      return <InfoArea style={style} right height align="left"/>
    case id === 'vo-right' && area:
      var style = {
        height: ['3,2', '4,3'],
        bottom: '1,0,1',
        right: [0, 'calc(100% + var(--layout-margin))'],
        background: ['linear-gradient(to right, #ddd 50%, white)', 'linear-gradient(to right, white, #ddd 50%)'],
        width: 'var(--layout-margin)'
      };
      return <InfoArea style={style} align="left"/>
    case id === 'center-right' && area:
      return <InfoArea style={{height: ['1', '4,2,1']}} bottom right align="left"/>
    case id === 'bottom-right' && area:
      return <InfoArea top right height align="left"/>
    case id === 'bottom-left' && area:
      return <InfoArea style={{top: ['1,1', '3,2,1']}} left height align="right"/>
    /*
    case id === 'bottom-left' && border:
      return <InfoBorder bottom left style={{height: ['8,5,2', '6,4,1']}}/>
    case id === 'bottom-right' && border:
      return <InfoBorder bottom right style={{height: '5,4'}}/>
    case id === 'center-right' && border:
      return <InfoBorder bottom right style={{height: ['1', '4,2,1']}}/>
    case id === 'top-right' && border:
      return <InfoBorder top right style={{height: '1'}}/>
    case id === 'top-left' && border:
      return <InfoBorder top left style={{height: '1'}}/>
    case id === 'vo-left' && border:
      return <InfoBorder style={{bottom: '1,0,1', right: [0, 'calc(100% + var(--layout-margin))'], height: '2,2', opacity: [1, 0]}}/>
    case id === 'vo-right' && border:
      return <InfoBorder style={{bottom: '1,0,1', left: ['calc(100% + var(--layout-margin))', 0], height: '3,3', opacity: [0, 1]}}/>
    */
    default:
      return null;
  }
};

export default InfoItem;
