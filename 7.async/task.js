class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(startTime, callback) {
        if (!startTime || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        };
        if (this.alarmCollection.some(item => (item.time === startTime) ? true : false)) { 
            console.warn('Уже присутствует звонок на это же время');
        };
        this.alarmCollection.push({callback: callback, time: startTime, canCall: true });
    };

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    };

    getCurrentFormattedTime() {
        let current = new Date();
        const formatter = new Intl.DateTimeFormat('ru', { hour: '2-digit', minute: '2-digit' });
        return formatter.format(current);
    };

    start() {
        if (this.intervalId) {return};
        this.intervalId = setTimeout(() => {
            this.alarmCollection.forEach(item => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                    item.canCall = false;
                    item.callback();
                };
            });
        }, 1000);
    };

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
}