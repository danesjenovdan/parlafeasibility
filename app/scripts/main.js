console.log('\'Allo \'Allo!');

var data = {
  'portable-cards': {
    albania: 28,
    bih: 49,
    croatia: 50,
    kosovo: 44,
    macedonia: 50,
    montenegro: 46,
    serbia: 49,
    min: 0,
    max: 53,
    text: 'The current version of Parlameter boasts 53 independent cards (19 for MPs, 18 for parliamentary groups, 10 for sessions and legislation, 2 for the front page and 5 interactive tools). The number of cards that can be implemented in each country is displayed in line with the country\'s name.',
    prefix: '',
    suffix: ' cards',
    link: 'https://docs.google.com/spreadsheets/d/1D1Gm-rw9SmRrm1cbL-O7Kqbg9-QeUBN6eFka4-E3KI4/edit?usp=sharing',
    reportClass: '',
    linkText: 'Link to full report on all available cards',
  },
  'installation-costs': {
    albania: 16728.77,
    bih: 25853.55,
    croatia: 22811.95,
    kosovo: 19939.34,
    macedonia: 29233.1,
    montenegro: 23994.8,
    serbia: 14701.04,
    min: 0,
    max: 29233.1,
    text: 'Although the majority of data is available in most of the countries we visited, some is machine-friendlier than other. This (along with local specifics) is the main reason installations in some countries present a bigger workload than others. The biggest factors besides the actual quality of data are integrations with platforms already in place in those countries (*) and the possibility to install Parlatube (**). The cost is calculated based on our cost for our senior developer’s person-day ($200).',
    prefix: '$',
    suffix: '',
    link: 'https://docs.google.com/spreadsheets/d/1XdPKTWv9oQ62nPmLEHtbAPlP0vr1CYxnVxhaE2XwY9k/edit?usp=sharing',
    reportClass: '',
    linkText: 'Link to detailed budget spreadsheet',
  },
  'maintenance-costs': {
    albania: 12166.38,
    bih: 15207.97,
    croatia: 15207.97,
    kosovo: 15207.97,
    macedonia: 15207.97,
    montenegro: 15207.9,
    serbia: 15207.9,
    min: 0,
    max: 15210,
    text: 'We did not consider differences in local economies for this report and have put a $100 tag on every work day spent on maintenance for everyone involved. Each month, 11 work days are spent by a local partner on editorial work and 4 work days on DJND side for system administration efforts. The maintenance budget is calculated on the premise that the project will run for a year. The lower number for Albania comes from a suspicion that we will not be able to parse voting records, subsequently resulting in less editorial work.',
    prefix: '$',
    suffix: '',
    link: 'https://docs.google.com/spreadsheets/d/1XdPKTWv9oQ62nPmLEHtbAPlP0vr1CYxnVxhaE2XwY9k/edit?usp=sharing',
    reportClass: '',
    linkText: 'Link to detailed budget spreadsheet',
  },
  'total-costs': {
    albania: 28895.14,
    bih: 41061.52,
    croatia: 38019.92,
    kosovo: 35147.31,
    macedonia: 44441.06,
    montenegro: 39202.76,
    serbia: 29909.01,
    min: 0,
    max: 44442,
    text: 'Installation costs plus maintenance costs for one year summed in one chart. The biggest factors along the quality of data are integrations with platforms already in place in those countries (*) and the possibility to install Parlatube (**).',
    prefix: '$',
    suffix: '',
    link: 'https://docs.google.com/spreadsheets/d/1XdPKTWv9oQ62nPmLEHtbAPlP0vr1CYxnVxhaE2XwY9k/edit?usp=sharing',
    reportClass: '',
    linkText: 'Link to detailed budget spreadsheet',
  },
  'election-dates': {
    albania: 42,
    bih: 10,
    croatia: 33,
    kosovo: 42,
    macedonia: 36,
    montenegro: 34,
    serbia: 28,
    min: 0,
    max: 42,
    text: 'Each election brings with it quite a bit of work on the data-entry side. This is the main reason why we do not want to install Parlameter less than a year before the next parliamentary elections take place. The number below counts the number of months until each country\'s next parliamentary elections.',
    prefix: '',
    suffix: ' months',
    link: '',
    reportClass: 'hidden',
    linkText: '',
  },
};

$('a[role="tab"]').on('click', function() {
  var newdata = data[$(this).attr('href').split('#')[1]];

  for (var key in newdata) {
    $('#progress-' + key).children('.progress-tube').css('width', newdata[key] / newdata.max * 100 + '%');
    $('#progress-' + key).children('.progress-value').text(newdata.prefix + newdata[key] + newdata.suffix);
  }

  $('.analysis-description').text(newdata.text);
  $('.paper-footer-link').removeClass('hidden').addClass(newdata.reportClass).attr('href', newdata.link).text(newdata.linkText);

  if (($(this).attr('href').indexOf('installation') > -1) || ($(this).attr('href').indexOf('total') > -1)) {
    $('.stars').removeClass('hidden');
  } else {
    $('.stars').addClass('hidden');
  }
});

$(document).ready(function() {
  // var newdata = data['portable-cards'];

  // for (var key in newdata) {
  //     console.log(key);
  //     $('#progress-' + key).children('.progress-tube').css('width', newdata[key]/newdata.max*100 + '%');
  //     $('#progress-' + key).children('.progress-value').text(newdata.prefix + newdata[key] + newdata.suffix);
  // }

  // $('.analysis-description').text(newdata.text);
  // $('.paper-footer-link').removeClass('hidden').addClass(newdata.reportClass).attr('href', newdata.link).text(newdata.linkText);


  for (var key in data) {
    console.log($('#' + key));


    var newdata = data[key];

    console.log(newdata);

    for (var newkey in newdata) {
      $('#' + key).find('#progress-' + newkey).children('.progress-tube').css('width', newdata[newkey] / newdata.max * 100 + '%');
      $('#' + key).find('#progress-' + newkey).children('.progress-value').text(newdata.prefix + newdata[newkey] + newdata.suffix);

      console.log($('#' + key).children('#progress-' + newkey).children('.progress-tube'));
    }

    $('#' + key).find('.analysis-description').text(newdata.text);
    $('#' + key).find('.paper-footer-link').removeClass('hidden').addClass(newdata.reportClass).attr('href', newdata.link).text(newdata.linkText);

    if ((key.indexOf('installation') > -1) || (key.indexOf('total') > -1)) {
      $('#' + key).find('.stars').removeClass('hidden');
    } else {
      $('#' + key).find('.stars').addClass('hidden');
    }
  }
});