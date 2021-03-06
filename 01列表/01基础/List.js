function List() {

    //2,存储数组
    this.dataStore = [];
    //存储当前的数据
    this.append=function (element) {
        //设置当前的数据
        this.dataStore[this.dataStore.length] = element;

    }
    //列表找到功能
    this.find=function (element) {
        //获得数组的长度
        var length = this.dataStore.length;
        //2,查找具体数据
        for(var i=0;i<length;i++){
            //对每个数据进行对比,如果找到返回当前数据的下标
            if(this.dataStore[i]==element){
                return i;
            }
        }
        return -1;

    }
    //删除功能
    this.remove=function (element) {
        //查找数据
        var index = this.find(element);
        //如果当前的下标为-1，那么在数组里面没有这个元素，就直接返回
        if(index==-1)
            return;
        //获得当前数组的长度
        var length = this.dataStore.length;
        //循环遍历当前的数据
        for(var i=index;i<length;i++){
            if(i==length-1){
                this.dataStore[i]=null;
            }else{
                this.dataStore[i]=  this.dataStore[i+1]
            }
        }
        this.dataStore.length--;
    }

    this.length = function () {
        return this.dataStore.length;
    }
    this.toString=function () {
        return this.dataStore.toString();
    }
    //[1,2,3,4,5,6,7,8,9] 11
    this.insert=function (element,after) {
        //找到当前元素的下标
        var index = this.find(after);
        //遍历当前的数据
        var length =this.length();
        for(var i=length-1;i>index;i--){
            //把当前的数据往后面移动，知道after元素的后一个元素i>index
            this.dataStore[i+1]=this.dataStore[i];
        }
        //把当前的元素放到after元素的后面
        this.dataStore[index+1]=element;
    }
    //清空功能
    this.clear=function () {
        delete this.dataStore;
        this.dataStore = [];
    }
    //判断当前给定的元素是否在当前的列表
    this.contains=function (element) {
        //获得列表的长度
        var length = this.length();
        //遍历数据
        for(var i=0;i<length;i++){
            //如果找到数据就返回真
            if(this.dataStore[i]==element){
                return true;
            }
        }
        //最后没有找到数据，就返回假
        return false;
    }

    this.forEach=function (call) {
        //1,获得列表的长度
        var length = this.length();
        //2,遍历数据
        for(var i=0;i<length;i++){
            // var item=  this.dataStore[i];
            call(this.dataStore[i]);
        }
    }
}