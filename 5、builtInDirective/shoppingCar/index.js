let app=new Vue({
    el:'#app',
    data:{
        list:[{
            id:1,
            name:'iphone 7',
            price:6188,
            count:2
        },{
            id:2,
            name:'iphone 6s',
            price:4188,
            count:1
        },{
            id:3,
            name:'iphone 6',
            price:3188,
            count:1
        },{
            id:4,
            name:'iphone 5',
            price:2188,
            count:1
        }],
        checkboxModel:[],
        checked:false
    },
    computed:{
        totalPrice:function(){
            let total=0;
            for(let i=0;i<this.list.length;i++){
                let item=this.list[i];
                total+=item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        },
        checkPrice:function(item){
            let total=0;
            total=item.price*item.count;
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }

    },
    methods:{
        handleReduce:function(index){
            if(this.list[index].count===1)return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        },
        checkedAll: function() {
            let _this = this;
            console.log(_this.checkboxModel);
            if (this.checked) {//实现反选
                _this.checkboxModel = [];
            }else{//实现全选
                _this.checkboxModel = [];
                _this.list.forEach(function(item) {
                    _this.checkboxModel.push(item.id);
                });
            }
        }
    },
    watch: {//深度 watcher
        'checkboxModel': {
            handler: function (val, oldVal) {
                if(this.checkboxModel.length === this.list.length) {
                    this.checked=true;
                }else{
                    this.checked=false;
                }
            },
            deep: true
        }
    }
});