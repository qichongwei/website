/**
 * Created by qiwei on 2017/10/9.
 */
export  default  function counter(state = [{much:'￥20',thing:'苹果',number:1,checked:1,muchnum:20},{much:'￥30',thing:'橘子',number:1,checked:0,muchnum:30},{much:'￥25',thing:'香蕉',number:1,checked:1,muchnum:25}], action) {
    let arr = [...state];
    switch (action.type) {
        case 'Increase':arr[action.index].number=arr[action.index].number+1;return arr;
        case 'Click':arr[action.index].checked=arr[action.index].checked?0:1;return arr;
        case 'Reduce':
            if(arr[action.index].number==0){
                return arr;
            }else{
                arr[action.index].number=arr[action.index].number-1;return arr;
            }
        case 'CheckAll':
            for(let i=0;i<arr.length;i++){
                arr[i].checked=1;
            }
            return arr;
        default:return state;
    }
}