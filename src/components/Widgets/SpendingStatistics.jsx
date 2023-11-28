import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, Inject } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let pointRender = (args) => {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'material';


};
let seriesColor = ['#47dfe7', "#7c46f6", "#f848f1"];
export let data1 = [
    { x: 'Chrome', y: 37.5, text: 'Chrome: 61.3%' },
    { x: 'Edge', y: 40, text: 'Edge: 5.0%' },
    { x: 'Samsung Internet', y: 20, text: Browser.isDevice ? 'Samsung <br> Internet: 2.7%' : 'Samsung Internet: 2.7%' },

];

const AccumulationDoughnut = () => {
    const onChartLoad = (args) => {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/light/i, "Light").replace(/contrast/i, 'Contrast');
    };
    return (
        <AccumulationChartComponent id="pie-chart" width='200px' height='150px' enableSmartLabels={true} load={load.bind(this)} loaded={onChartLoad.bind(this)} enableBorderOnMouseMove={false} legendSettings={{ visible: false }}>
            <Inject services={[PieSeries, AccumulationDataLabel]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='80%' border={{ width: 1 }} startAngle={Browser.isDevice ? 30 : 62} />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
};


function SpendingStatistics() {
    return (
        <div className='w-[340px] h-[170px] bg-[#342f45] rounded-2xl p-5 flex overflow-hidden relative'>
            <span>
                <p className='text-white text-xl pb-2'>Spending Statistics</p>

                <div className='flex gap-1 items-center'>
                    <div className='rounded-full w-3 h-3 bg-[#47dfe7]' /><p>Cash Withdrawal</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='rounded-full w-3 h-3 bg-[#7c46f6]' /><p>Purchase Payments</p>
                </div> <div className='flex gap-1 items-center'>
                    <div className='rounded-full w-3 h-3 bg-[#404041]' /><p>Money Transfers</p>
                </div>
            </span>
            <div className=' absolute -right-10 top-2 '><AccumulationDoughnut /></div>



        </div >
    )
}

export default SpendingStatistics