#include <stdio.h>
#include <ctype.h>

char *eatspace(char *str) {
	char *p = str, *start = str;
	while(*str) {
		if (isspace(*str))
			str++;
		else
			*p++ = *str++;
	}
//	*p = 0;
	
	return start;
}


int main() {
  	char str[100];
  	gets(str);
  	puts(eatspace(str));
  	return 0;
} 
