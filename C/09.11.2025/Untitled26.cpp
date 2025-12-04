#include <stdio.h>
#include <string.h>
void substr_r(const char origin[], char dest[], int count)
{
	int len;
	len = strlen(origin);
	if(len <= count)
	{
		dest = strcpy(dest, origin);
	}
	else 
	{
		dest = strcpy(dest, origin + len - count);
	}
}
int main()
{
	char str[1000], t[1000];
	int n;
	gets(str);
	scanf("%d", &n);
	substr_r(str, t, n);
	puts(t);
	return 0;
}
