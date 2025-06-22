import { CurrentDateTime } from "../types/utils";

export function getCurrentDateTime(timeZone:number, dateTime:Date = new Date()):CurrentDateTime {
   
    // get  current date
    const currentDate = dateTime;

    // set the time zone offset
    timeZone = (timeZone/3600) ; // convert minutes to hours

    const checkTimeZone = currentDate.getTimezoneOffset() / 60;
   
    if(timeZone + checkTimeZone > 0){
        currentDate.setHours(currentDate.getHours() + timeZone + checkTimeZone);
    }

    const hour: number = currentDate.getHours() ;
    const minute: number = currentDate.getMinutes();
    const date: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1;
    return {
        hour,
        minute,
        date,
        month,
        longDate: currentDate.toLocaleDateString('es-ES',{
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
    };
}