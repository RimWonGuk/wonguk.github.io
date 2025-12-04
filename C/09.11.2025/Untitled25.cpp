#include <iostream>
#include <stdio.h>
int main()
{
int i, a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int *p = &a[0], *q = &a[9], temp;
while(p < q)
{
   temp = *p;
   *p++ = *q;
   *q-- = temp;
}
	for (i = 1; i < 10; i++)
	{
		printf("%d\n", a[i]);
	}
	return 0;
} 
