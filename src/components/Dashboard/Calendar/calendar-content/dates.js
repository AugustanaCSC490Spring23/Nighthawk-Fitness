import dayjs from "dayjs";

export const getDate = (month = dayjs().month(), year = dayjs().year()) => {
    
    const startDate = dayjs().year(year).month(month).startOf("month");
    const lastDate = dayjs().year(year).month(month).endOf("month");

    const dates = [];

    //This is to get the prefix dates
    for(let i = 0; i < startDate.day(); i++) {
        dates.push({ date: startDate.day(i), currentMonth: false });
    }

    //This is to get the current dates
    for(let i = startDate.date(); i <= lastDate.date(); i++) {
        dates.push({ date: startDate.date(i), currentMonth: true, today: startDate.date(i).toDate().toDateString() == dayjs().toDate().toDateString() });
    }

    //This is to get the sufix dates
    const sufixDate = 42 - dates.length;

    for(let i = lastDate.date() + 1; i <= lastDate.date() + sufixDate; i++) {
        dates.push({ date: lastDate.date(i), currentMonth: false });
    }

    return dates;

}

export const months = [
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
]