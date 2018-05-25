'use strict';

/*
 * Author: 1e42-ng-computer
 * Date: 2018-05-24
 */

var solvedTeams = [
    {
        id: 'AD8',
        tries: 1,
        time: 79
    },
    {
        id: 'AD5',
        tries: 1,
        time: 47
    },
    {
        id: 'BG5',
        tries: 1,
        time: 62
    },
    {
        id: 'CA4',
        tries: 1,
        time: 131
    },
    {
        id: 'AG1',
        tries: 3,
        time: 138
    },
    {
        id: 'AA8',
        tries: 1,
        time: 203
    },
    {
        id: 'DB5',
        tries: 2,
        time: 93
    },
    {
        id: 'FC6',
        tries: 1,
        time: 144
    },
    {
        id: 'DE7',
        tries: 3,
        time: 191
    },
    {
        id: 'DC3',
        tries: 4,
        time: 197
    },
    {
        id: 'BD5',
        tries: 2,
        time: 129
    }
];

var lvlNum = [1, 23, 47, 71];

var lvlRank = [1, 24, 71, 142];

var lvlIcons = [
    'data:image/gif;base64,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',
    'data:image/gif;base64,R0lGODlhGQAZALMAAPDXaY+gr+KvEf32r/roj/LJNqG1xpqWcsDAwNa5T76VH4lrHHF6eYCLiwAAAAAAACH5BAEAAAgALAEAAQAXABYAQATMEMkpTWg4GMrDIMQgEgCRLEChFkLbTMFRgqKY1CDQBJwBkoCUYtVqHSgN2ifBLCgOH2Aq8eoFLoxsdqfhUCzBlKooeHoNhhFBsXAqEsOxcdKo4XKLRSIoZ0hiP3YDAAtqYQc8ExYygYI6XV5/BwlyZYiRFT5hYpUCBxsUASEhcCl5RC0KiQgeg0FMUk1yqhJ1giQmegqcLggGtiMsY3pSYwwbATOCAydRQAUJib8zITgKhgBUoL4x1MsfAIjbiheM1SQHO+ORaFfuaJERADs=',
    'data:image/gif;base64,R0lGODlhGQAZALMAAOnp6cDAwNjY2KanqLe3t8fHx5KSklVVVa27yoODgqyusam1waCipJycnQAAAAAAACH5BAEAAAEALAEAAQAXABYAQATrMMgZ0Bosj4XoRIpQCEApCs1RDAShMEbCdMFgjAJZAg2ZrwYFBUHAFY6ERAsTSzRoCMbIxLApEgnAr0CwPT2gBtZAJjcUNI8EpHApBoMGGTvzLAgmQeKQdCq7cgkGHQsKO3kiBAcHCkgKYg0LNQw5OjuKeVwwQhMLcgSVh1oEBpFqa4UMcnNOHKcBd0dILW+BTmkSjZViXIttcU2cASEALaQDAi0Fqi5xWEIgliVHAgwHDAlcXTFPF5bJDG0GBz2zME9RoNIl1pVINnWe6tIFWVqJcmkIcjjfeaRf7IgJ0o8LmTqvUL3Q4EpNBAA7',
    'data:image/gif;base64,R0lGODlhGQAZALMAAOGOG5VZD/TKS0w0C4iWoP3ybZaqvtO2ULONN8DAwMNyD/jfXXR4deytMgAAAAAAACH5BAEAAAkALAIAAQAVABYAQATKMMmZDCHsGjqJaMIifoIyNAqgKkpAVAwohEuxKOIiHAizSYTDp0EEBFasQIAhYRxyPERKqSM2AC0mxcLoejM/DhChwrJaSm3HNgsMjIFWGc1kiAp40nUwQBSxSwYMMzR4BQcDIx8APT9cCIR3bD0EYVsMUklplhRBVmVmdJ1PMyZ7b0hKLwZPDWQBkCooKWZKgjWGC1coA3KpXTQ6WCt9QytLBJCFeAsIA4RFLZWYkbgHAYquLj8YMoXBPBkcXJhCM+FgYlsG7O3qEQA7'
];

var problemNum = 0;

var realJudgeTime = 1e42;


function Team(props) {
    this.id = props.id;
    this.school = props.school;
    this.name = props.name;
    this.official = props.official;
    this.oldRank = props.oldRank;
    this.rank = 0;
    this.officialRank = 0;
    this.solved = 0;
    this.time = 0;
    this.submissions = props.submissions;
}


Team.prototype.calculate = function () {
    var that = this;
    this.submissions.forEach(function (status) {
        if (status.result === 'solved') {
            that.solved++;
            that.time += status.failedTries * 20 + status.time;
        }
    })
};


function Ranklist(teams) {
    this.teams = teams;
}


function cmpICPCRules(a, b) {
    if (a.solved === b.solved)
        return a.time - b.time;
    else return b.solved - a.solved;
}


Ranklist.prototype.sort = function () {
    if (this.teams.length === 0) return;
    this.teams.sort(cmpICPCRules);
    this.teams[0].rank = 1;
    for (var i = 1; i < this.teams.length; ++i) {
        if (this.teams[i].solved === this.teams[i - 1].solved && this.teams[i].time === this.teams[i - 1].time) {
            this.teams[i].rank = this.teams[i - 1].rank;
        }
        else {
            this.teams[i].rank = i + 1;
        }
    }
    var officialTeams = [];
    this.teams.forEach(function (team, index) {
        if (team.official) {
            officialTeams.push({
                rank: 0,
                solved: team.solved,
                time: team.time,
                index: index
            })
        }
    });
    if (officialTeams.length === 0) return;
    this.teams[officialTeams[0].index].officialRank = officialTeams[0].rank = 1;
    for (i = 1; i < officialTeams.length; ++i) {
        if (officialTeams[i].solved === officialTeams[i - 1].solved && officialTeams[i].time === officialTeams[i - 1].time) {
            officialTeams[i].rank = officialTeams[i - 1].rank;
        }
        else {
            officialTeams[i].rank = i + 1;
        }
        this.teams[officialTeams[i].index].officialRank = officialTeams[i].rank;
    }
};


Ranklist.prototype.render = function (tb, trs, problemId) {
    $(trs.slice(11)).remove();
    var statistics = new Array(problemNum + 1).join(problemId).split('').map(function () {
        return {submitted: 0, firstYes: realJudgeTime, totalYes: 0};
    });
    this.teams.forEach(function (team) {
        tb.append('<tr></tr>');
        var tr = tb.find('tr:last');
        // Medal
        tr.append('<td><img></td>');
        for (var i = 0; i < lvlRank.length; ++i) {
            if (team.official && team.officialRank <= lvlRank[i]) {
                tr.find('td:last>img').attr('src', lvlIcons[i]);
                break;
            }
        }
        // Rank
        tr.append('<td style="padding: 0px;\n' +
            'color: windowtext;\n' +
            'font-size: 14.0pt;\n' +
            'font-weight: 400;\n' +
            'font-style: normal;\n' +
            'text-decoration: none;\n' +
            'font-family: &quot;Times New Roman&quot;, serif;\n' +
            'text-align: left;\n' +
            'vertical-align: middle;\n' +
            'border-top: 1.5pt solid #D9D9D9;\n' +
            'border-right: none;\n' +
            'border-bottom: 1.5pt solid #D9D9D9;\n' +
            'border-left: none;\n' +
            'white-space: normal;"></td>');
        tr.find('td:last').text(team.rank + ' (' + team.oldRank + ')');
        // Team Name
        tr.append('<td style="padding: 0px;\n' +
            'color: windowtext;\n' +
            'font-size: 14.0pt;\n' +
            'font-weight: 400;\n' +
            'font-style: normal;\n' +
            'text-decoration: none;\n' +
            'font-family: &quot;Times New Roman&quot;, serif;\n' +
            'text-align: left;\n' +
            'vertical-align: middle;\n' +
            'border-top: 1.5pt solid #D9D9D9;\n' +
            'border-right: none;\n' +
            'border-bottom: 1.5pt solid #D9D9D9;\n' +
            'border-left: none;\n' +
            'white-space: normal;"></td>');
        tr.find('td:last').text(team.id + '_' + team.school + '_' + team.name + (team.official ? '' : '*'));
        // Solved
        tr.append('<td style="padding: 0px;\n' +
            'color: windowtext;\n' +
            'font-size: 14.0pt;\n' +
            'font-weight: 400;\n' +
            'font-style: normal;\n' +
            'text-decoration: none;\n' +
            'font-family: &quot;Times New Roman&quot;, serif;\n' +
            'text-align: center;\n' +
            'vertical-align: middle;\n' +
            'border-top: 1.5pt solid #D9D9D9;\n' +
            'border-right: none;\n' +
            'border-bottom: 1.5pt solid #D9D9D9;\n' +
            'border-left: none;\n' +
            'white-space: normal;"></td>');
        tr.find('td:last').text(team.solved);
        // Time
        tr.append('<td align="right" style="padding: 0px;\n' +
            'color: windowtext;\n' +
            'font-size: 14.0pt;\n' +
            'font-weight: 400;\n' +
            'font-style: normal;\n' +
            'text-decoration: none;\n' +
            'font-family: &quot;Times New Roman&quot;, serif;\n' +
            'text-align: general;\n' +
            'vertical-align: middle;\n' +
            'border-top: 1.5pt solid #D9D9D9;\n' +
            'border-right: none;\n' +
            'border-bottom: 1.5pt solid #D9D9D9;\n' +
            'border-left: none;\n' +
            'white-space: normal;"></td>');
        tr.find('td:last').text(team.time);
        // Submissions
        var totalAtt = 0;
        team.submissions.forEach(function (status, index) {
            tr.append('<td style="padding: 0px;\n' +
                'color: windowtext;\n' +
                'font-size: 14.0pt;\n' +
                'font-weight: 400;\n' +
                'font-style: normal;\n' +
                'text-decoration: none;\n' +
                'font-family: &quot;Times New Roman&quot;, serif;\n' +
                'text-align: center;\n' +
                'vertical-align: middle;\n' +
                'border-top: 1.5pt solid #D9D9D9;\n' +
                'border-right: none;\n' +
                'border-bottom: 1.5pt solid #D9D9D9;\n' +
                'border-left: none;\n' +
                'white-space: normal;"></td>');
            var td = tr.find('td:last');
            td.text(status.tries + '/' + (status.result === 'solved' ? status.time : '--'));
            if (status.result === 'solved') {
                td.css('backgroundColor', 'lime');
            }
            else if (status.result === 'failed') {
                td.css('backgroundColor', 'red');
            }
            totalAtt += status.tries;
            statistics[index].submitted += status.tries;
            if (status.result === 'solved') {
                statistics[index].firstYes = Math.min(statistics[index].firstYes, status.time);
                statistics[index].totalYes++;
            }
        });
        // Team Statistics
        tr.append('<td style="padding: 0px;\n' +
            'color: windowtext;\n' +
            'font-size: 14.0pt;\n' +
            'font-weight: 400;\n' +
            'font-style: normal;\n' +
            'text-decoration: none;\n' +
            'font-family: &quot;Times New Roman&quot;, serif;\n' +
            'text-align: center;\n' +
            'vertical-align: middle;\n' +
            'border-top: 1.5pt solid #D9D9D9;\n' +
            'border-right: none;\n' +
            'border-bottom: 1.5pt solid #D9D9D9;\n' +
            'border-left: none;\n' +
            'white-space: normal;"></td>');
        tr.find('td:last').text(totalAtt + '/' + team.solved);
    });
    // Problem Statistics
    tb.append('<tr height="48"></tr>');
    var tr = tb.find('tr:last');
    tr.append('<td></td>');
    tr.append('<td style="padding: 0px;\n' +
        'color: windowtext;\n' +
        'font-size: 14.0pt;\n' +
        'font-weight: 400;\n' +
        'font-style: normal;\n' +
        'text-decoration: none;\n' +
        'font-family: &quot;Times New Roman&quot;, serif;\n' +
        'text-align: general;\n' +
        'vertical-align: middle;\n' +
        'border-top: none;\n' +
        'border-right: none;\n' +
        'border-bottom: 1.5pt solid #D9D9D9;\n' +
        'border-left: none;\n' +
        'white-space: nowrap;"></td>');
    tr.append('<td style="padding: 0px;\n' +
        'color: windowtext;\n' +
        'font-size: 14.0pt;\n' +
        'font-weight: 400;\n' +
        'font-style: normal;\n' +
        'text-decoration: none;\n' +
        'font-family: &quot;Times New Roman&quot;, serif;\n' +
        'text-align: left;\n' +
        'vertical-align: middle;\n' +
        'border-top: none;\n' +
        'border-right: none;\n' +
        'border-bottom: 1.5pt solid #D9D9D9;\n' +
        'border-left: none;\n' +
        'white-space: normal;"></td>');
    tr.find('td:last').text('Submitted/1st Yes/Total Yes');
    tr.append('<td style="padding: 0px;\n' +
        'color: windowtext;\n' +
        'font-size: 14.0pt;\n' +
        'font-weight: 400;\n' +
        'font-style: normal;\n' +
        'text-decoration: none;\n' +
        'font-family: &quot;Times New Roman&quot;, serif;\n' +
        'text-align: general;\n' +
        'vertical-align: middle;\n' +
        'border-top: none;\n' +
        'border-right: none;\n' +
        'border-bottom: 1.5pt solid #D9D9D9;\n' +
        'border-left: none;\n' +
        'white-space: nowrap;"></td>');
    tr.append('<td style="padding: 0px;\n' +
        'color: windowtext;\n' +
        'font-size: 14.0pt;\n' +
        'font-weight: 400;\n' +
        'font-style: normal;\n' +
        'text-decoration: none;\n' +
        'font-family: &quot;Times New Roman&quot;, serif;\n' +
        'text-align: general;\n' +
        'vertical-align: middle;\n' +
        'border-top: none;\n' +
        'border-right: none;\n' +
        'border-bottom: 1.5pt solid #D9D9D9;\n' +
        'border-left: none;\n' +
        'white-space: nowrap;"></td>');
    var totalTotalAtt = 0;
    var totalTotalSolv = 0;
    for (var i = 0; i < problemNum; ++i) {
        tr.append('<td style="padding: 0px;\n' +
            'color: windowtext;\n' +
            'font-size: 14.0pt;\n' +
            'font-weight: 400;\n' +
            'font-style: normal;\n' +
            'text-decoration: none;\n' +
            'font-family: &quot;Times New Roman&quot;, serif;\n' +
            'text-align: center;\n' +
            'vertical-align: middle;\n' +
            'border-top: none;\n' +
            'border-right: none;\n' +
            'border-bottom: 1.5pt solid #D9D9D9;\n' +
            'border-left: none;\n' +
            'white-space: normal;"></td>');
        var temp = statistics[i].submitted + '/' + (statistics[i].totalYes > 0 ? statistics[i].firstYes : '--') + '/' + statistics[i].totalYes;
        tr.find('td:last').text(temp);
        tr.find('td:last').attr('title', temp);
        totalTotalAtt += statistics[i].submitted;
        totalTotalSolv += statistics[i].totalYes;
    }
    tr.append('<td style="padding: 0px;\n' +
        'color: windowtext;\n' +
        'font-size: 14.0pt;\n' +
        'font-weight: 400;\n' +
        'font-style: normal;\n' +
        'text-decoration: none;\n' +
        'font-family: &quot;Times New Roman&quot;, serif;\n' +
        'text-align: center;\n' +
        'vertical-align: middle;\n' +
        'border-top: none;\n' +
        'border-right: none;\n' +
        'border-bottom: 1.5pt solid #D9D9D9;\n' +
        'border-left: none;\n' +
        'white-space: normal;"></td>');
    tr.find('td:last').text(totalTotalAtt + '/' + totalTotalSolv);
    tb.show();
    $('#notice').remove();
};


function getDataFromDOM(elem, problemId) {
    var tds = $(elem).children('td');
    var o = {};
    o.oldRank = parseInt(tds.eq(1).text());
    var info = tds.eq(2).text().split('_');
    o.id = info[0];
    o.school = info[1];
    o.name = info.splice(2).join('_');
    o.official = o.name.substr(o.name.length - 1) !== '*';
    if (!o.official) o.name = o.name.substr(0, o.name.length - 1);
    // Get submissions
    o.submissions = [];
    for (var i = 0; i < problemNum; ++i) {
        var td = tds.eq(5 + i);
        info = td.text().split('/');
        var tries = parseInt(info[0]);
        var failedTries = tries;
        var time = info[1] === '--' ? 0 : parseInt(info[1]);
        var bgColor = td.css('backgroundColor');
        var result = '';
        if (bgColor === 'rgb(0, 255, 0)') {
            result = 'solved';
            failedTries--;
        }
        else if (bgColor === 'rgb(255, 0, 0)') {
            result = 'failed';
        }
        // Reset status for problem F
        if (i === 5) {
            var solvedAfterRejudge = false;
            solvedTeams.some(function (team) {
                if (team.id === o.id) {
                    result = 'solved';
                    tries = team.tries;
                    failedTries = team.tries - 1;
                    time = team.time;
                    solvedAfterRejudge = true;
                    console.log('Found an outstanding team "%s_%s_%s" which solved problem %s.', o.id, o.school, o.name, problemId);
                    return true;
                }
            });
            if (!solvedAfterRejudge && result === 'solved') {
                // console.log('Found a unfortunate team "%s_%s_%s" which failed on problem %s.', o.id, o.school, o.name, problemId);
                result = 'failed';
                failedTries = tries;
            }
        }
        o.submissions.push({
            result: result,
            tries: tries,
            failedTries: failedTries,
            time: time
        });
    }
    return new Team(o);
}


function getWaitingTimeBeforeRejudge() {
    return realJudgeTime / 1e6 / Math.pow(1e9, 4);
}


function showJSON(data) {
    var jsonPage = window.open('', '', 'height=400, width=600');
    jsonPage.document.write('<pre style="white-space:pre-wrap;word-wrap:break-word;"></pre>');
    jsonPage.document.querySelector('pre').innerText = data;
}


function main(problemId) {
    var tb = $('div[align="center"]>table>tbody');
    tb.hide();
    $('body').append('<h1 id="notice" style="margin-top:200px;text-align:center;">Rejudge problem ' + problemId + '...</h1>');
    setTimeout(function () {
        var trs = tb.children('tr');
        var problemHead = trs.eq(9);
        problemNum = problemHead.children('td').length - 6;
        var statisticsDOM = trs[trs.length - 5];
        var teamsDOM = trs.slice(11, trs.length - 5);
        var ranklist = new Ranklist([]);
        teamsDOM.each(function (index, elem) {
            var team = getDataFromDOM(elem, problemId);
            team.calculate();
            ranklist.teams.push(team);
        });
        ranklist.sort();
        console.log(ranklist);
        window.showJSON = window.showJSON.bind(null, JSON.stringify(ranklist.teams));
        ranklist.render(tb, trs, problemId);
        console.log('Rejudge completed. You can input "showJSON()" in console to view ranklist JSON data.')
    }, getWaitingTimeBeforeRejudge() * Math.random() + 0.5);
}


function rejudge() {
    console.log('***** Welcome to use Rejudge JS *****');
    console.log('Please wait for downloading required library...');
    console.log('If any error occurred, please try to use Chrome/Firefox or high-speed mode in some multi-engine browsers.');
    console.log('');
    var jquery = document.createElement('script');
    jquery.setAttribute('src', 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js');
    document.querySelector('head').appendChild(jquery);
    jquery.addEventListener('load', function () {
        main('F');
    });
}
