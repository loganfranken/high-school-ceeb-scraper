var cheerio = require('cheerio');
var request = require('request');

var stateAbbrs = ["AL", "AK", "AS", "AZ", "AR", "AA", "AE", "AP", "CA", "CO", "CT",
              "DE", "DC", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS",
              "KY", "LA", "ME", "MH", "MD", "MA", "MI", "FM", "MN", "MS", "MO",
              "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH",
              "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM",
              "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"];

var currStateIndex = 0;

function printStateHighSchoolCodes(stateAbbr)
{

  var url = 'https://sat.collegeboard.org/register/sat-code-search-schools'
            + '?decorator=none&submissionMode=ajax&pageId=registerCodeSearch'
            + '&codeType=high-school-code&country=US&state='
            + stateAbbr;

  request(url, function (error, response, body) {

    // Parse the results
    var $ = cheerio.load(response.body);
    $('table#codeSearchResultsTable tr').each(function(i, elem) {

      var row = $(elem);

      var school = row.find('td.schoolResultCell').text().trim();
      var code = row.find('td.codeResultCell').text().trim();

      if(school === '' && code === '')
      {
        return;
      }

      console.log(stateAbbr + ',' + school + ',' + code);

    });

    currStateIndex++;

    // If we have looped through all the states, return
    if(currStateIndex >= stateAbbrs.length)
    {
      return;
    }

    // Otherwise, query the next state
    printStateHighSchoolCodes(stateAbbrs[currStateIndex]);

  });

}

printStateHighSchoolCodes(stateAbbrs[0]);
