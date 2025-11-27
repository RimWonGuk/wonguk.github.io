#include <iostream>
#include <cstdlib>
#include <cstring>
using namespace std;
char *eatspace(char *str)
{
	char *str1;
	str1 = (char*)malloc(strlen(str));
	int i, count = 0;
	for (i = 0; str[i] != '\0'; i++)
	{
		int space = str[i];
		if(space == 32 )
			continue;
		str1[count++] = str[i];
	}
	return str1;
}
int main()
{
	int i;
	char str2[100], str3[100];
	gets(str2);
	gets(str3);
	char *str4 = eatspace(str2);
	char *str5 = eatspace(str3);
	for (i = 0; i < 100; i++)
	{
		int space1 = str4[i], space2 = str5[i];
		if (space1 > space2)
		{
			puts(str4);
			break;
		}
		if(space1 < space2)
		{
			puts(str5);
			break;
		}
		if (space1 == space2)
			continue;
	}
	free(str4);
	free(str5);
	return 0;
}
