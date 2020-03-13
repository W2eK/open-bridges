import React, { useContext } from 'react';

import LabelContext from '../hooks/label-context';
import InfoArea from './info-area';
import InfoBox from './info-box';
import InfoLabel from './info-label';
import InfoIcon from './info-icon';
import InfoRiver from './info-river';

const InfoItem = props => {
  const labels = useContext(LabelContext);
  const { icon, label, area, river, id } = props;
  const source = labels.get(id)
  switch (true) {
    // Большая Нева / Малая Нева
    case id === 1 && river:
      var style = {
        transform: ['translateX(50%)', 'translateX(-50%)']
      }
      return <InfoRiver style={style} label={[labels.get(2), source]} clickable/>
    case id === 4 && river:
      // Большая Невка
      var style = {
        transform: 'translateX(50%)'
      }
      return <InfoRiver style={style} label={source}/>
    case id === 14 && river:
      // Финский Залив
      var style = {
        position: 'absolute',
        top: '-1,-1',
        width: 'calc(100% - var(--layout-padding) * 2)',
        padding: 0
      }
      return <InfoRiver style={style} label={source} waves/>
    case id === 15 && river:
      // Ладога
      return <InfoRiver label={source} waves/>
    case id === 5 && label:
      // Центр Города
      var boxStyle = {
        bottom: ['6em', 0]
      };
      return (
        <InfoBox left align="right" style={boxStyle}>
          <InfoLabel label={source} clickable/>
        </InfoBox>
      );
    case id === 5 && icon:
      // Центр Города
      var style = {
        bottom: '1,0,1',
        left: [0, 'calc(var(--layout-margin) * -1)'],
        opacity: [1, 0]
      };
      return (
        <InfoBox align="right" style={style}>
          <InfoIcon label={source} clickable/>
        </InfoBox>
      );
    case id === 6 && label:
      // Васильевский остров
      var boxStyle = {
        bottom: '2,1,1',
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
        <InfoBox style={{ bottom: [0, '2,1,1'] }} right align="left">
          <InfoLabel label={source} clickable />
        </InfoBox>
      );
    case id === 7 && icon:
      // Петроградская сторона
      return (
        <InfoBox style={{ bottom: [0, '1'], opacity: [0, 1] }} right align="left">
          <InfoIcon label={source} clickable />
        </InfoBox>
      );
    case id === 8 && label:
      // Выборгская сторона
      return (
        <InfoBox right top align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 8 && icon:
      // Выборгская сторона
      return (
        <InfoBox right bottom style={{bottom: '-40px'}} align="left">
          <InfoIcon label={source} />
        </InfoBox>
      );
    case id === 9:
      // Пески
      return (
        <InfoBox style={{top: '1,1'}} left align="right">
          <InfoIcon label={source} />
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 10:
      // Обухово
      return (
        <InfoBox left bottom align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 11 && label:
      // Юго-запад
      var style = {
        bottom: '3,2,1',
        left: [0, 'calc(var(--layout-margin) * -1)'],
        opacity: [1, 0]
      };
      return (
        <InfoBox style={style} left align="right">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 13 && label:
      // Старая Деревня
      var style = {
        bottom: '4,3,1',
        right: ['calc(var(--layout-margin) * -1)', 0],
        opacity: [0, 1]
      };
      return (
        <InfoBox style={style} right align="left">
          <InfoLabel label={source} />
        </InfoBox>
      );
    case id === 'top-left' && area:
      //Юго-Запад
      var style = {
        height: '1',
        opacity: [1, 0],
        bottom: '3,2,1',
        left: [0, 'calc(var(--layout-margin) * -1)']
      }
      return <InfoArea style={style} align="right"/>
    case id === 'top-right' && area:
      //Старая Деревня
      var style = {
        opacity: [0, 1],
        bottom: '4,3,1',
        right: ['calc(var(--layout-margin) * -1)', 0]
      }
      return <InfoArea style={style} right height align="left"/>
    case id === 'vasilyevskiy' && area:
      // Васильевский осров
      var style = {
        height: ['3,2', '4,3'],
        bottom: '1,0,1',
        right: [0, 'calc(100% + var(--layout-margin))'],
        background: ['linear-gradient(to right, #ddd 50%, #f0f0f0)', 'linear-gradient(to right, #f0f0f0, #ddd 50%)'],
        // background: ['linear-gradient(to right, #f5f5f5 50%, white)', 'linear-gradient(to right, white, #f5f5f5 50%)'],
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
