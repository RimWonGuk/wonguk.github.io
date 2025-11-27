#include <stdio.h>
#include <stdlib.h>
using namespace std;
char *my_itoa(int num)
{
	char *str;
	int len = 0, i, temp;
	temp = num;
	while(temp)
		len++, temp /= 10;
	str = (char*)malloc(len + 1);
	str[len] = 0;
	while (num)
	{
		str[--len] = num % 10 + '0';
		num /= 10;
	}
	return str;
}
int main()
{
	char *p = my_itoa(9845);
	puts(p);
	free(p);
	return 0;
}
