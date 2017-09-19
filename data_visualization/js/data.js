$(document).ready(function() {
    var ink, d, x, y;
    $(".ripple").click(function(e) {

        ink = $(this).find(".mask");
        ink.removeClass("animate");

        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }

        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;

        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate");
    });

    lineChart();
    timeseriesChart();
    pieChart();
    barChart();



});

var lineChart = function() {
    var chart1 = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [
                ['data1', 151, 150, 122, 102],
                ['data2', 82, 368, 193, 137],
                ['data3', 13, 141, 106, 70],
                ['data4', 10, 96, 114, 86],
                ['data5', 2, 37, 88, 52],
            ],
            names:{
                'data1':'大於20k',
                'data2':'大於20k',
                'data3':'大於40k',
                'data4':'大於50k',
                'data5':'大於60k',
            }
        },
        axis: {
            x: {
                label: {
                    text: '年齡',
                    position: 'inner-right'
                },
                type: 'category',
                categories: ['20歲以上', '30歲以上', '40歲以上', '50歲以上']
            },
            y: {
                label: {
                    text: '人數',
                    position: 'inner-top'
                }
            }
        },
        legend: {
            position: 'inset',
            inset: {
                anchor: 'top-right',
                x: 20,
                y: 10,
                step: 3
            }
        }
    });
}

var timeseriesChart = function() {
    var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
            x: 'x',
            columns: [
                ['x', '2016-09-23', '2016-09-24', '2016-09-25', '2016-09-26', '2016-09-27', '2016-09-28', '2016-09-29'],
                ['data1', 30, 31, 31, 30, 30, 30, 30]
            ],
            names: {
                data1: '最高溫',
                data2: '最低溫'
            },
            type: 'area-spline'
        },
        color: {
            pattern: ['#cc3d0b','#0077c0']
        },
        axis: {
            x: {
                label: {
                    text: '日期',
                    position: 'inner-right'
                },
                type: 'timeseries',
                tick: {
                    format: '%m-%d'
                }
            },
            y: {
                label: {
                    text: '溫度',
                    position: 'inner-top'
                },
                tick: {

                    format: function(d) {
                        return d + '度';
                    }
                }
            }
        }
    });
    setTimeout(function() {
        chart2.load({
            columns: [
                ['data2', 24, 24, 24, 25, 25, 24, 24]
            ]
        })
    }, 500);

}

var pieChart = function() {
    var chart3 = c3.generate({
        bindto: '#chart3',
        data: {
            columns: [
                ['data1', 48],
                ['data2', 60],
                ['data3', 84],
                ['data4', 81],
                ['data5', 16]
            ],
            type: 'pie',
            names: {
                data1: '一個人自在快活',
                data2: '兩個人甜蜜幸福',
                data3: '一個溫馨美滿的家庭',
                data4: '擁有一群好朋友',
                data5: '生命很苦，沒有特別幸福的事'
            }
        },
        pie: {
            label: {
                format: function(value, ratio, id) {
                    return value + '人';
                }
            }
        },
        legend: {
            position: 'inset',
            inset: {
                anchor: 'top-right',
                x: 120,
                y: 10,
                step: 5
            }
        }
    });
}

var barChart = function() {
    var chart4 = c3.generate({
        bindto: '#chart4',
        data: {
            rows: [
                ['data1', 'data2', 'data3'],
                [1141, 991, 739],
                [4545, 4226, 4379],
                [5624, 6016, 5765],
                [127, 112, 102]
            ],
            type: 'bar',
            names: {
                data1: '102年',
                data2: '103年',
                data3: '104年',
            }
        },
        bar: {
            width: { ratio: 0.4 }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['113專線', '警政', '教育', '防治中心'],
                label: {
                    text: '通報單位',
                    position: 'outer-right'
                }
            },
            y: {
                label: {
                    text: '件數',
                    position: 'inner-middle'
                }
            }
        },
    });
    setTimeout(function() {
        chart4.groups([
            ['data1', 'data2', 'data3']
        ])
    }, 1000);
}
