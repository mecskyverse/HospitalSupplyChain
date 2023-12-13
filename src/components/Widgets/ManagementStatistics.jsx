import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, Inject } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let pointRender = (args) => {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'material';
};

export let data1 = [
    { x: 'Total', y: 59.1, text: 'Chrome: 59.1%' },
    { x: 'remaining', y: 40.9, text: 'Edge: 5.0%' },

];

const AccumulationDoughnut = () => {
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/light/i, "Light").replace(/contrast/i, 'Contrast');
    };
    return (
        <AccumulationChartComponent width='100px' height='150px' enableSmartLabels={true} load={load.bind(this)} enableBorderOnMouseMove={false} legendSettings={{ visible: false }}>
            <Inject services={[PieSeries, AccumulationDataLabel]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='80%' border={{ width: 1 }} startAngle={Browser.isDevice ? 30 : 62} />
            </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
    );
};


function ManagementStatistics({ inventoryData, index }) {
    return (

        <div className='w-[400px] h-[150px] bg-[#342f45] rounded-2xl p-2 flex flex-col overflow-hidden relative'>
            <p className='text-white text-center text-2xl pb-2 '>{inventoryData.title}</p>
            <span className={`${index === 2 ? 'self-center ml-7' : 'self-center'} mt-auto mb-auto text-3xl`}>
                {inventoryData.value} Units
            </span>
            <div className='absolute left-2 top-5'>{inventoryData.icon === '' ? <AccumulationDoughnut /> : inventoryData.icon}</div>
        </div >
    )
}

export default ManagementStatistics