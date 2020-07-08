class Month {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  getRandomMonth = (date) => {
    let rMonth = this.months[Math.ceil(Math.random() * 11)];

    if (rMonth === date.month) {
      rMonth = this.getRandomMonth(date);
    }

    return rMonth;
  };

  getSeasonByMonth = (month) => {
    let season = "";
    if (month === "January" || month === "February" || month === "March") {
      season = "winter";
    } else if (month === "April" || month === "May" || month === "June") {
      season = "spring";
    } else if (
        month === "July" ||
        month === "August" ||
        month === "September"
    ) {
      season = "summer";
    } else season = "fall";

    return season;
  };

  getCurrentMonth = () => {
    return this.months[new Date().getMonth()];
  };

  getLastDayOfMonth = (cmonth, cyear) => {
    return new Date(
        cyear,
        this.convertToLocale(
            "en-US",
            new Date(`${cmonth} 01 ${cyear}`)
        ).getUTCMonth(),
        0
    ).getDate();
  };

  convertToLocale = (locale, time) => {
    return new Date(new Date(time).toLocaleString(locale));
  };

  convertToJapanTime = (time) => {
    return new Date(time).toLocaleString("en-US", {timeZone: "Japan"});
  };
}

class Year {
  getCurrentYear = () => {
    return new Date().getFullYear();
  };

  getRandomYear = (date) => {
    let rYear = Math.ceil(Math.random() * 15) + 2000;

    if (rYear === date.year) {
      rYear = this.getRandomYear(date);
    }

    return rYear;
  };
}

export const month = new Month();
export const year = new Year();
