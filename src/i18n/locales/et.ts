// Estonian

import { Locale } from "../locale";
export class et implements Locale {
  atX0SecondsPastTheMinuteGt20(): string|null {
    return null;
  }
  atX0MinutesPastTheHourGt20(): string|null {
    return null;
  }
  commaMonthX0ThroughMonthX1(): string|null {
    return ", %s kuni %s";
  }
  commaYearX0ThroughYearX1(): string|null {
    return null;
  }

  use24HourTimeFormatByDefault() {
    return true;
  }

  anErrorOccuredWhenGeneratingTheExpressionD() {
    return "Avaldise kirjelduse genereerimisel ilmnes viga. Kontrollige cron-avaldise süntaksit.";
  }
  everyMinute() {
    return "iga minut";
  }
  everyHour() {
    return "iga tund";
  }
  atSpace() {
    return "Kell ";
  }
  everyMinuteBetweenX0AndX1() {
    return "Iga minut vahemikus %s kuni %s";
  }
  at() {
    return "Kell";
  }
  spaceAnd() {
    return " ja";
  }
  everySecond() {
    return "iga sekund";
  }
  everyX0Seconds() {
    return "iga %s sekundi järel";
  }
  secondsX0ThroughX1PastTheMinute() {
    return "sekundid %s kuni %s pärast minutit";
  }
  atX0SecondsPastTheMinute() {
    return "%s sekundit pärast minutit";
  }
  everyX0Minutes() {
    return "iga %s minuti järel";
  }
  minutesX0ThroughX1PastTheHour() {
    return "minutitel %s kuni %s pärast täistundi";
  }
  atX0MinutesPastTheHour() {
    return "%s. minutil pärast täistundi";
  }
  everyX0Hours() {
    return "iga %s tund";
  }
  betweenX0AndX1() {
    return "vahemikus %s kuni %s";
  }
  atX0() {
    return "kell %s";
  }
  commaEveryDay() {
    return ", iga päev";
  }
  commaEveryX0DaysOfTheWeek() {
    return ", iga %s. nädala päev";
  }
  commaX0ThroughX1() {
    return ", %s kuni %s";
  }
  commaAndX0ThroughX1() {
    return ", %s kuni %s";
  }
  first() {
    return "esimene";
  }
  second() {
    return "teine";
  }
  third() {
    return "kolmas";
  }
  fourth() {
    return "neljas";
  }
  fifth() {
    return "viies";
  }
  commaOnThe() {
    return ", ";
  }
  spaceX0OfTheMonth() {
    return " %s kuus";
  }
  lastDay() {
    return "viimane päev";
  }
  commaOnTheLastX0OfTheMonth() {
    return ", kuu viimasel %s";
  }
  commaOnlyOnX0() {
    return ", ainult %s";
  }
  commaAndOnX0() {
    return " ja %s";
  }
  commaEveryX0Months() {
    return ", iga %s kuu järel";
  }
  commaOnlyInX0() {
    return ", ainult %s";
  }
  commaOnTheLastDayOfTheMonth() {
    return ", kuu viimasel päeval";
  }
  commaOnTheLastWeekdayOfTheMonth() {
    return ", kuu viimasel tööpäeval";
  }
  commaDaysBeforeTheLastDayOfTheMonth() {
    return ", %s päeva enne kuu viimast päeva";
  }
  firstWeekday() {
    return "esimene tööpäev";
  }
  weekdayNearestDayX0() {
    return "tööpäeval, mis on lähim %s. päevale";
  }
  commaOnTheX0OfTheMonth() {
    return ", kuu %s";
  }
  commaEveryX0Days() {
    return ", igal %s. päeval";
  }
  commaBetweenDayX0AndX1OfTheMonth() {
    return ", kuu %s. kuni %s. päeval";
  }
  commaOnDayX0OfTheMonth() {
    return ", kuu %s. päeval";
  }
  commaEveryMinute() {
    return ", iga minut";
  }
  commaEveryHour() {
    return ", iga tund";
  }
  commaEveryX0Years() {
    return ", iga %s aasta järel";
  }
  commaStartingX0() {
    return ", alustades %s";
  }
  daysOfTheWeek() {
    return ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
  }
  monthsOfTheYear() {
    return [
      "jaanuar",
      "veebruar",
      "märts",
      "aprill",
      "mai",
      "juuni",
      "juuli",
      "august",
      "september",
      "oktoober",
      "november",
      "detsember",
    ];
  }
}
