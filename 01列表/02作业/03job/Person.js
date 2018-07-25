function Person(name,sex) {
    this.name=name;
    this.sex=sex;

    this.getName=function () {
        return this.name;
    }
    this.getSex=function(){
        return this.sex;
    }
}