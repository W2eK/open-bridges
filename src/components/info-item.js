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
      var boxStyle = {
        bottom: ['1,0,1', 0],
        height: '3em'
      };
      return (
        <InfoBox left align="right" style={boxStyle}>
          <InfoLabel label={source} clickable/>
        </InfoBox>
      );
    case id === 5 && icon:
      // Центр Города
      var boxStyle = { bottom: '2,0,1', left: [0, '-5em'], opacity: [1, 0] };
      return (
        <InfoBox align="right" style={boxStyle}>
          <InfoIcon label={source} clickable/>
        </InfoBox>
      );
    case id === 6 && label:
      // Васильевский остров
      var boxStyle = {
        bottom: '2,1,1',
        height: '1',
        left: ['100%', 0],
        transform: ['translateX(0)', 'translateX(-100%)']
      }
      var labelStyle = {
        left: [0, '100%'],
        transform: ['translateX(0)', 'translateX(-100%)']
      }
      return (
        <InfoBox style={boxStyle}>
          <InfoLabel label={source} style={labelStyle} clickable/>
        </InfoBox>
      );
    case id === 6 && icon:
      // Васильевский остров
      var boxStyle = {
        left: 0,
        bottom: '1,0,1',
        left: ['100%', 0],
        transform: ['translateX(0)', 'translateX(-100%)']
      };
      var iconStyle = {
        left: [0, '100%'],
        transform: ['translateX(0)', 'translateX(-100%)']
      }
      return (
        <InfoBox style={boxStyle}>
          <InfoIcon label={source} style={iconStyle} clickable/>
        </InfoBox>
      );
    case id === 7 && label:
      // Петроградская сторона
      return (
        <InfoBox style={{ bottom: [0, '2,1,1'] }} right clickable align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 8 && label:
      // Выборгская сторона
      return (
        <InfoBox right top align="left">
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
      // Юго-запад
      return (
        <InfoBox style={{ height: '3em', top: [0, '1,1'], left: [0, 'calc(var(--layout-margin) * -1)'], opacity: [1, 0] }} left top align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 13 && label:
      // Старая Деревня
      return (
        <InfoBox style={{ height: '3em', top: ['-1,-1', 0], right: ['calc(var(--layout-margin) * -1)', 0], opacity: [0, 1] }} right top align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 'top-left' && area:
      //Юго-Запад
      var style = {
        height: '1',
        opacity: [1, 0],
        top: [0, '1,1'],
        left: [0, 'calc(var(--layout-margin) * -1)']
      }
      return <InfoArea style={style} left align="right"/>
    case id === 'top-right' && area:
      //Старая Деревня
      var style = {
        opacity: [0, 1],
        bottom: ['1,1',0],
        right: ['calc(var(--layout-margin) * -1)', 0]
      }
      return <InfoArea style={style} right height align="left"/>
    case id === 'vasilyevskiy' && area:
      // Васильевский осров
      var style = {
        height: ['3,2', '4,3'],
        bottom: '1,0,1',
        right: [0, 'calc(100% + var(--layout-margin))'],
        background: ['linear-gradient(to right, #ddd 50%, white)', 'linear-gradient(to right, white, #ddd 50%)'],
        width: 'var(--layout-margin)'
      };
      return <InfoArea style={style} align="left"/>
    case id === 'center-right' && area:
      // Петрогдская сторона
      var style = {height: ['1', '4,2,1']}
      return <InfoArea style={style} bottom right align="left"/>
    case id === 'bottom-right' && area:
      // Выборгская сторона
      return <InfoArea top right height align="left"/>
    case id === 'bottom-left' && area:
      // Центр города
      var style = {top: ['1,1', '3,2,1']}
      return <InfoArea style={style} left height align="right"/>
    default:
      return null;
  }
};

export default InfoItem;
