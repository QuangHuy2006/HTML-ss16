let str = prompt("nhap vao chuoi");
let cnt=0;
let str2 = str[0];
let str3 = str2.toUpperCase();
let newstr = str.replace(str[0],str3);
document.write(newstr);
for(let i = 0; i< str.length; i++){
    if(str[i] === ' '){
        cnt=i;
document.write("dau cach o vi tri index: " + cnt                                                            );
        let newstr2 = newstr.charAt(cnt+1);
        let str4 = newstr2.toUpperCase;
        let newstr3 = newstr.replace(newstr[cnt+1],newstr3);
    }
}
for(let i = 0;i < str.length; i++){
    document.write(newstr3[i]); 
}