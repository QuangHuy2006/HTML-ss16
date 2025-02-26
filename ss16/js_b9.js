let str = prompt("nhap chuoi bat ky:");
let str5 = str.trim();
let str2="";
let str3 = str5[0];
let str4 = str3.toUpperCase();
str = str.replace(str[0],str4);
for(let i=0; i< str.length; i++){
    if(str[i] === ' '){
        str= str.replace(str[i+1], str[i+1].toUpperCase());
    }
}
for(let i=0; i< 1; i++){
document.write(str);
}