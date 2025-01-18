class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(startTime, callback) {
        this.startTime = startTime;
        this.callback = callback;
        if ((!this.startTime) || (!this.callback)) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.forEach(index => {
            if (index.time === this.startTime) {
                console.warn('Уже присутствует звонок на это же время');
            };
        });
        return this.alarmCollection.push({callback: this.callback, time: this.startTime, canCall: true });
    };

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(index => index.time !== time);
        return this.alarmCollection;
    };

    getCurrentFormattedTime() {
        let current = new Date();
        const formatter = new Intl.DateTimeFormat('ru', { hour: '2-digit', minute: '2-digit' });
        return formatter.format(current);
    };

    start() {
        if (this.intervalId) {return};
        let that = this;
        this.intervalId = setTimeout(function() {
            that.alarmCollection.forEach(index => {
                if (index.time === that.getCurrentFormattedTime() && index.canCall === true) {
                    index.canCall = false;
                    index.callback();
                };
            }
        )}, 1000);
    };

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    };

    resetAllCalls() {
        this.alarmCollection.forEach(index => index.canCall = true);
    };

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
        this.intervalId = null;
    };
}