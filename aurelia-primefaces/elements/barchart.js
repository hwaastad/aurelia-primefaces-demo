import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-barchart')
@inject(Element)
export class BarChartComponent {
    @bindable value;
    @bindable width;
    @bindable height;
    @bindable scaleBeginAtZero = true;
    @bindable scaleShowGridLines = true;
    @bindable scaleGridLineColor = "rgba(0,0,0,.05)";
    @bindable scaleGridLineWidth = 1;
    @bindable scaleShowHorizontalLines = true;
    @bindable scaleShowVerticalLines = true;
    @bindable barShowStroke = true;
    @bindable barStrokeWidth = 2;
    @bindable barValueSpacing = 5;
    @bindable barDatasetSpacing = 1;
    @bindable legendTemplate = "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>";
    @bindable onBarsSelect;

    initialized;
    chart = null;
    differ;

    constructor(element) {
        this.element = element;
        //this.differ = differs.find([]).create(null);
    }

    attached() {
        this.initChart();
        this.initialized = true;
    }


    onCanvasClick(event) {
        if (this.chart) {
            let activeBars = this.chart.getBarsAtEvent(event);
            if (activeBars) {
                if (this.onBarsSelect) {
                    this.onBarsSelect({ originalEvent: event, bars: activeBars });
                }
            }
        }
    }

    initChart() {
        console.dir('initialize chart...');
        if (this.value) {
            this.chart = new Chart(this.element.children[0].getContext("2d")).Bar(this.value, {
                scaleBeginAtZero: this.scaleBeginAtZero,
                scaleShowGridLines: this.scaleShowGridLines,
                scaleGridLineColor: this.scaleGridLineColor,
                scaleGridLineWidth: this.scaleGridLineWidth,
                scaleShowHorizontalLines: this.scaleShowHorizontalLines,
                scaleShowVerticalLines: this.scaleShowVerticalLines,
                barShowStroke: this.barShowStroke,
                barStrokeWidth: this.barStrokeWidth,
                barValueSpacing: this.barValueSpacing,
                barDatasetSpacing: this.barDatasetSpacing
            });
        }

    }

    detached() {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    }
}