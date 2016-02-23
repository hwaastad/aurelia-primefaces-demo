import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'jquery-ui';
import 'primeui';
import 'primeui/primeui.css!';
import 'primeui/themes/delta/theme.css!'
import 'fontawesome/css/font-awesome.css!';

@customElement('p-linechart')
@inject(Element)
export class LineChartComponent {
    @bindable animation = true;
    @bindable animationSteps = 60;
    @bindable animationEasing = "easeOutQuart";
    @bindable showScale = true;
    @bindable scaleOverride = false;
    @bindable scaleSteps = null;
    @bindable scaleStepWidth = null;
    @bindable scaleStartValue = null;
    @bindable scaleLineColor = 'rgba(0,0,0,.1)';
    @bindable scaleLineWidth = 1;
    @bindable scaleShowLabels = true;
    @bindable scaleLabel = '<%=value%>';
    @bindable scaleIntegersOnly = true;
    @bindable scaleBeginAtZero = true;
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
    @bindable tooltipFontStyle = '14';
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
    @bindable scaleShowGridLines = true;
    @bindable scaleGridLineColor = "rgba(0,0,0,.05)";
    @bindable scaleGridLineWidth = 1;
    @bindable scaleShowHorizontalLines = true;
    @bindable scaleShowVerticalLines = true;
    @bindable bezierCurve = true;
    @bindable bezierCurveTension = 0.4;
    @bindable pointDot = true;
    @bindable pointDotRadius = 4;
    @bindable pointDotStrokeWidth = 1;
    @bindable pointHitDetectionRadius = 20;
    @bindable datasetStroke = true;
    @bindable datasetStrokeWidth = 2;
    @bindable datasetFill = true;
    @bindable legend;
    @bindable legendTemplate = "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>";
    @bindable onPointsSelect;

    initialized;
    chart;

    constructor(element) {
        this.element = element;
        this.initialized = false;
    }

    attached() {
        this.initChart();
        this.initialized = false;
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
            let activePoints = this.chart.getPointsAtEvent(event);
            if (activePoints) {
                if (this.onPointsSelect) {
                    this.onPointsSelect({ originalEvent: event, points: activePoints });
                }
            }
        }
    }

    initChart() {
        if (this.value) {
            this.chart = new Chart(this.element.children[0].getContext("2d")).Line(this.value, {
                scaleShowGridLines: this.scaleShowGridLines,
                scaleGridLineColor: this.scaleGridLineColor,
                scaleGridLineWidth: this.scaleGridLineWidth,
                scaleShowHorizontalLines: this.scaleShowHorizontalLines,
                scaleShowVerticalLines: this.scaleShowVerticalLines,
                bezierCurve: this.bezierCurve,
                bezierCurveTension: this.bezierCurveTension,
                pointDot: this.pointDot,
                pointDotRadius: this.pointDotRadius,
                pointDotStrokeWidth: this.pointDotStrokeWidth,
                pointHitDetectionRadius: this.pointHitDetectionRadius,
                datasetStroke: this.datasetStroke,
                datasetStrokeWidth: this.datasetStrokeWidth,
                datasetFill: this.datasetFill
            });

            if (this.legend) {
                this.legend.innerHTML = this.chart.generateLegend();
            }
        }

    }

}