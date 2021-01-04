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

  getSeasonByMonth = (cmonth) => {
    let season = "";
    if (cmonth === "January" || cmonth === "February" || cmonth === "March") {
      season = "winter";
    } else if (cmonth === "April" || cmonth === "May" || cmonth === "June") {
      season = "spring";
    } else if (
        cmonth === "July" ||
        cmonth === "August" ||
        cmonth === "September"
    ) {
        season = "summer";
    } else season = "fall";

    return season;
  };

  getCurrentMonth = () => {
    return this.months[new Date().getMonth()];
  };

  getLastDayOfMonth = (cmonth, cyear) => {
    let gldm = new Date(
        cyear,
        this.convertToLocale(
            "en-US",
            new Date(`${cmonth} 01 ${cyear}`)
        ).getMonth() + 1,
        0
    ).getDate();
    return gldm;
  };

  convertToLocale = (locale, time) => {
    return new Date(new Date(time).toLocaleString(locale));
  };

  convertToJapanTime = (time) => {
      return new Date(time).toLocaleString("en-US", {timeZone: "Japan"});
  };

  getFirstWeekDayOfMonth = (cmonth, cyear) => {
    let tempDate = new Date(
        this.convertToLocale("en-US", `${cmonth} 01 ${cyear}`)
    );
    return tempDate.getDay();
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
