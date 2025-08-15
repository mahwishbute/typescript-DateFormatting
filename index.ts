// Import stylesheets
import './style.css';

import moment from 'moment-timezone';

// Import supported locales
import 'moment/locale/fr';
import 'moment/locale/fr-ca';
import 'moment/locale/de';
import 'moment/locale/en-ca';

function formattedDate(
  date: Date,
  formatPattern: string,
  timeZone: string = 'UTC',
  formatIsoCode: string = 'en-US'
): string {
  let dateTimeFormat: string;

  switch (formatPattern) {
    case 'short':
      dateTimeFormat = 'L, LT'; // localized short date + time
      break;
    case 'medium':
      dateTimeFormat = 'll, LTS'; // localized medium date + time
      break;
    case 'shortDate':
      dateTimeFormat = 'L'; // localized short date
      break;
    case 'mediumDate':
      dateTimeFormat = 'll'; // localized medium date
      break;
    case 'longDate':
      dateTimeFormat = 'LL'; // localized long date
      break;
    case 'fullDate':
      dateTimeFormat = 'LLLL'; // localized full date with weekday
      break;
    default:
      if (!formatPattern || formatPattern.trim() === '') {
        dateTimeFormat =
          formatIsoCode.toLowerCase() === 'fr-ca' || formatIsoCode.toLowerCase() === 'en-ca'
            ? 'YYYY-MM-DD HH:mm'
            : 'L LT'; // fallback to localized short date + time
      } else {
        dateTimeFormat = formatPattern;
      }
      break;
  }

  const localizedMoment = moment(date).tz(timeZone).locale(formatIsoCode.toLowerCase());
  return localizedMoment.format(dateTimeFormat);
}

const now = new Date();

// en-US (English - United States)
console.log('en-US / short:', formattedDate(now, 'short', 'America/New_York', 'en-US'));
console.log('en-US / medium:', formattedDate(now, 'medium', 'America/New_York', 'en-US'));
console.log('en-US / shortDate:', formattedDate(now, 'shortDate', 'America/New_York', 'en-US'));
console.log('en-US / mediumDate:', formattedDate(now, 'mediumDate', 'America/New_York', 'en-US'));
console.log('en-US / longDate:', formattedDate(now, 'longDate', 'America/New_York', 'en-US'));
console.log('en-US / fullDate:', formattedDate(now, 'fullDate', 'America/New_York', 'en-US'));
console.log('en-US / default:', formattedDate(now, '', 'America/New_York', 'en-US'));

// en-CA (English - Canada)
console.log('en-CA / default:', formattedDate(now, '', 'America/Toronto', 'en-CA'));

// fr-FR (French - France)
console.log('fr-FR / short:', formattedDate(now, 'short', 'Europe/Paris', 'fr-FR'));
console.log('fr-FR / medium:', formattedDate(now, 'medium', 'Europe/Paris', 'fr-FR'));
console.log('fr-FR / fullDate:', formattedDate(now, 'fullDate', 'Europe/Paris', 'fr-FR'));
console.log('fr-FR / default:', formattedDate(now, '', 'Europe/Paris', 'fr-FR'));

// fr-CA (French - Canada)
console.log('fr-CA / shortDate:', formattedDate(now, 'shortDate', 'America/Toronto', 'fr-CA'));
console.log('fr-CA / fullDate:', formattedDate(now, 'fullDate', 'America/Toronto', 'fr-CA'));
console.log('fr-CA / default:', formattedDate(now, '', 'America/Toronto', 'fr-CA'));

// de-DE (German - Germany)
console.log('de-DE / mediumDate:', formattedDate(now, 'mediumDate', 'Europe/Berlin', 'de-DE'));
console.log('de-DE / fullDate:', formattedDate(now, 'fullDate', 'Europe/Berlin', 'de-DE'));
console.log('de-DE / default:', formattedDate(now, '', 'Europe/Berlin', 'de-DE'));