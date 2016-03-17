import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
//import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-piechart')
@inject(Element)
export class PieChartComponent {
    @bindable animation = true;
    @bindable showScale = true;
    @bindable scaleOverride = false;
    @bindable scaleSteps = null;
    @bindable scaleStepWidth = null;
    @bindable scaleStartValue = null;
    @bindable scaleLineColor = 'rgba(0,0,0,.1)';
    @bindable scaleLineWidthr = 1;
    @bindable scaleShowLabels = true;
    @bindable scaleLabel = '<%=value%>';
    @bindable scaleIntegersOnly = true;
    @bindable scaleBeginAtZero = false;
    @bindable scaleFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    @bindable scaleFontSize = 12;
    @bindable scaleFontStyle = 'normal';
    @bindable scaleFontColor = '#666';
    @bindable responsive = false;
    @bindable maintainAspectRatio = true;
    @bindable showTooltips = true;
    @bindable tooltipFillColor = 'rgba(0,0,0,0.8)';
    @bindable tooltipFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    @bindable tooltipFontSize = 14;
    @bindable tooltipFontStyle = 'normal';
    @bindable tooltipFontColor = '#fff';
    @bindable tooltipTitleFontFamily = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    @bindable tooltipTitleFontSize = 14;
    @bindable tooltipTitleFontStyle = 'bold';
    @bindable tooltipTitleFontColor = '#fff';
    @bindable tooltipYPadding = 6;
    @bindable tooltipXPadding = 6;
    @bindable tooltipCaretSize = 8;
    @bindable tooltipCornerRadius = 6;
    @bindable tooltipXOffset = 10;
    @bindable tooltipTemplate = "<%if (label){%><%=label%>: <%}%><%= value %>";
    @bindable multiTooltipTemplate = "<%= value %>";
    @bindable value;
    @bindable width;
    @bindable height;
    @bindable segmentShowStroke = true;
    @bindable segmentStrokeColor = '#fff';
    @bindable segmentStrokeWidth = 2;
    @bindable percentageInnerCutout = 0;
    @bindable animationSteps = 100;
    @bindable animationEasing = 'easeOutBounce'
    @bindable animateRotate = true;
    @bindable animateScale = false;
    @bindable legend;
    @bindable legendTemplate = "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>";
    @bindable onSegmentsSelect;

    initialized;

    chart;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        this.initChart();
        this.initialized = true;
    }

    detached() {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    }

    onCanvasClick(event) {
        if (this.chart) {
            let segs = this.chart.getSegmentsAtEvent(event);
            if (segs) {
                if (this.onSegmentsSelect) {
                    this.onSegmentsSelect({ originalEvent: event, segments: segs });
                }
            }
        }
    }

    valueChanged(newValue, oldValue) {
        console.log('Value has changed');
        console.dir(this.value);
        if (this.initialized) {
            if (this.chart) {
                this.chart.destroy();
            }
            this.initChart();
        }
    }
    
    propertyChanged(property,newVal,oldVal){
        console.log('change prop');
    }


    initChart() {
        if (this.value) {
            this.chart = new Chart(this.element.children[0].getContext("2d")).Pie(this.value, {
                segmentShowStroke: this.segmentShowStroke,
                segmentStrokeColor: this.segmentStrokeColor,
                segmentStrokeWidth: this.segmentStrokeWidth,
                percentageInnerCutout: this.percentageInnerCutout,
                animationSteps: this.animationSteps,
                animationEasing: this.animationEasing,
                animateRotate: this.animateRotate,
                animateScale: this.animateScale,
                legendTemplate: this.legendTemplate
            });

            if (this.legend) {
                this.legend.innerHTML = this.chart.generateLegend();
            }
        }
    }

}