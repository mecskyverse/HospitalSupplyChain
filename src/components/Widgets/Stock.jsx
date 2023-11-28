import * as React from "react";
import { useEffect } from "react";
import { StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import stockData1 from '../stockData';

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
        border: none;
    }
    .charts {
        align :center;
        border: none;
    }`;
const titlestyle = { fontFamily: "Arial", color: '#ffffff', textOverflow: 'Wrap' };
const OHLC = () => {
    const tooltipRender = (args) => {
        if (args.text.split('<br/>')[4]) {
            let target = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0]);
            let value = (target / 100000000).toFixed(1) + 'B';
            args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
        }
    };

    return (
        <div className='bg-[#342f45] rounded-lg ' >
            <style>{SAMPLE_CSS}</style>
            <StockChartComponent width='600px' height='342px' border={{ color: 'red', width: 0 }} primaryXAxis={{ valueType: 'DateTime', majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' }, crosshairTooltip: { enable: true } }} primaryYAxis={{ labelFormat: 'n0', lineStyle: { width: 0 }, rangePadding: 'None', majorTickLines: { height: 0 } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, position: 'Nearest' }} tooltipRender={tooltipRender} crosshair={{ enable: true }} title='Monthly Revenue Progress' titleStyle={titlestyle} theme='MaterialDark'>
                <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]} />
                <StockChartSeriesCollectionDirective>
                    <StockChartSeriesDirective dataSource={stockData1} xName='x' high='high' low='low' open='open' close='close' type='HiloOpenClose' bearFillColor={'#9D7FFE'} bullFillColor={'#39D3EC'} animation={{ enable: true }} />
                </StockChartSeriesCollectionDirective>
            </StockChartComponent>
        </div>
    );
};
export default OHLC;