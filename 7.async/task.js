class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, action, id){
        if (isNaN(id)){
            throw new Error("введите id");
        } else if (this.alarmCollection.some((element) =>element.id == id)){
                console.error("id существует");
                return;
            }
        
        this.alarmCollection.push({
            id:id,
            time:time,
            callback: action
        })
    }
    removeClock(id){
        let startLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((element) =>  id == this.alarmCollection[element] );
        let finishLength = this.alarmCollection.length;
        if (startLength == finishLength){
            return false;
        }else{
            return true;
        }
    }

    start(){
        if (this.timerId != null){
            return;
        }
        
        let timeNow = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });



        function checkClock (){
            for (let item = 0; item < this.alarmCollection.length; item++){
            this.timerId = this.alarmCollection[item].time
            if (timeNow != this.timerId){
                console.log("Ещё рано!")
            }else{
                console.log("Бззз!!!")
            }    
        }
    }

        while(timeNow == this.timerId){
            setTimeout(this.alarmCollection.forEach(checkClock()), 60000);
        }    
    }

    stop(){
        if(this.timerId == null){
            return;
        }
        clearTimeout(id);
        this.timerId = null;
    }

    printAlarms(){
        this.alarmCollection.forEach((clock) => console.log(clock.time, clock.id));
    }

    clearAlarms(){
        this.alarmCollection.forEach((clock) => this.removeClock(clock.id))
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
 
    }
}