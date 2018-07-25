function List() {
    this.dataStore = [];
    this.append = function (data) {
        //根据当前数组的长度插入新的数据
        this.dataStore[this.length()] = data;
    }

    this.length = function () {
        //获得数组的长度
        var length = this.dataStore.length;
        return length;
    }

    //如果找到当前的数据，就返回当前数据的下标，如果没有找到数据就返回-1
    this.find = function (data) {
        //1,获得数组的长度
        var length = this.length();
        //2,设置返回数据的下标
        var index = -1;
        //3,遍历数据
        for (var i = 0; i < length; i++) {
            if (data == this.dataStore[i]) {
                index = i;
                return index;
            }
        }
        return index;
    }

    this.forEach = function (call) {
        //1,获得数组的长度
        var length = this.length();
        //2,遍历数据
        for (var i = 0; i < length; i++) {
            call(this.dataStore[i]);
        }
    }
    //如果删除成功返回1，删除失败返回0
    this.remove = function (data) {
        //1，找到数据所在的位置
        var index = this.find(data);
        if (index == -1)
            return 0;
        //2,获得数组的长度
        var length = this.length();
        for (var i = index + 1; i < length; i++) {
            //3,把当前的数据往前面移动
            this.dataStore[i - 1] = this.dataStore[i];
        }
        //4,删除最后的那个数据
        this.dataStore[length - 1] = null;
        //5,数组的长度变下
        this.dataStore.length--;
        return 1;
    }
    //在after后面插入数据,如果after有数据，就插入在after后面，如果after没有数据，就把data插入到最后面的数据
    this.insert = function (data, after) {
        //1，找到当前after数据的下标
        var index = this.find(after);
        if (index == -1) {
            //想队列后面添加数据
            this.append(data);
        } else {
            //  1,2,3,4,5,5,7,9
            var length = this.length();
            for (var i = length - 1; i > index; i--) {
                this.dataStore[i + 1] = this.dataStore[i]
            }
            this.dataStore[index + 1] = data;
        }
    }

    this.clear = function () {
        delete this.dataStore;
        this.dataStore = [];
    }

    this.contains = function (data) {

        var length = this.length();
        for(var i=0;i<length;i++){
            if(this.dataStore[i]==data){
                console.log(this.dataStore[i]);
                return true;
            }
        }

        return false;
    }

    // 1，在队列里面添加一个新的插入方法，新添加进来的数据放到比它小的数据的后面
    //  3  5  2  7  9    2
    this.append2=function (data) {

        //1,获得数组的长度
        var length = this.length();
        //2,设置下标
        var index=0;
        //3,找到比传进来数据大的数据的下标
        while(this.dataStore[index]<data){
            index++;
        }
        for(var i=length-1;i>=index;i--){
            //按照要求把数据往后面移动
            this.dataStore[i+1]=this.dataStore[i];
        }
        //插入数据
        this.dataStore[index]=data;
    }
}