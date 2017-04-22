/**
 * Created by lethe on 17-4-22.
 */
const animate = function (list,offset) {
    let newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + 'px';
    if(newLeft < -4000){
        list.style.left = -800 + 'px';
    }
    if(newLeft > -800){
        list.style.left = -4000 + 'px';
    }
};
export default animate;