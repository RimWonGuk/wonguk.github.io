#include <iostream>
#include <cstring>
using namespace std;
char *mystrtok(char *str, char *delim)
{
	char *pstr;
	char *result = NULL;
	if(str)	pstr = str;
	while (*pstr && strchr(delim, *pstr))
	{
		*pstr = 0;
		pstr++;
	}
	if(!*pstr) return NULL;
	result = pstr;
	while(*pstr && !strchr(delim, *pstr)) pstr++;
	if(*pstr)
		*pstr++ = 0;
	return result;
}
int main()
{
	char str[] = "c, programming.", seps[] = " .,";
	char *p;
	p = mystrtok(str, seps);
	puts(p);
	p = mystrtok(NULL, seps);
	puts(p);
	p = mystrtok(NULL, seps);
	return 0;
}
