let str = prompt("nhap chuoi bat ky: ");
let str2 = str.trim();
let cnt = 1;
for(let i = 0; i < str.length;i++){
    if(str2[i] === " "){
        cnt+=1;
    }
}
document.write("so chu trong cau la:"+ cnt);