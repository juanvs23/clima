export function convertTime(hour:number,minute:number): {newHour:string,newMinute:string,meridiem:string} {
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    const newHour = hour % 12 ? hour % 12 : 12;
    const hourString = newHour < 10 ? `0${newHour}` : newHour.toString();
    const newMinute = minute<10? `0${minute}` : minute.toString();

    return {newHour:hourString,newMinute,meridiem};
}