const profile = {
    userName: "Jacob",
    playTime: 300,
    changeUserName(newName) {
        return this.userName = newName
    },
    updatePlayTime(hours) {
        this.playTime += hours
    },
    getInfo() {
        return `${this.userName} has ${this.playTime} active hours`

    }

}


console.log(profile.getInfo());

profile.changeUserName("Marco")
console.log(profile.getInfo());

profile.updatePlayTime(20)
console.log(profile.getInfo());
