#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main(){
    char str[100];
    fflush(stdin);
    gets(str);
    for(int i=0;i<strlen(str);i++){
        if(strcpy(str[i], " ")){
            str[i]-=32;
        }
    }
    for(int i=0;i<strlen(str);i++){
        printf("%c", str[i]);
    }
}