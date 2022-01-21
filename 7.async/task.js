class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, action, id){
        if (isNaN(id)){
            throw new Error("введите id");
        }
        for (let i=0; i<this.alarmCollection.length; i++){
            if (id != this.alarmCollection[i]){
                console.error("id существует");
                return;
            }
        }
        this.alarmCollection.push({
            id: id,
            time:time,
            callback: action
        })
    }
    removeClock(id){
        this.alarmCollection = this.alarmCollection.filter((element, id) => { id == this.alarmCollection[element] });
        /*    if (isNaN(del)){
                return true;
            }else{
                return false;
            }   */
    }

    start(){
        let nowTime = getCurrentFormattedTime();
        this.timerId = this.time - nowTime;
        
    }


    getCurrentFormattedTime(){
        const currentDate = new Date();
        let minutes = currentDate.getMinutes();
        let hours = currentDate.getHours();
        if (hours<10&&minutes<10){
            return `0${currentDate.getHours()}:0${currentDate.getMinutes()}`
        }else if (hours<10){
            return `0${currentDate.getHours()}:${currentDate.getMinutes()}`
        }else if (minutes<10){
            return `${currentDate.getHours()}:0${currentDate.getMinutes()}`
        }else{
            return `${currentDate.getHours()}:${currentDate.getMinutes()}`
        }
 
    }
}