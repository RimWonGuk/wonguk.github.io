#include <stdio.h>
#include <math.h>
 
int gcd(int a, int b)
{
	int r;
	do
	{
		r = a % b;
		a = b;
		b = r;
	} while (r);
	return a;
}
int main()
{
	int n, num, den, i;
	scanf("%d", &n);
	num = 0;
	den = 1;
	for (i = 2; i <= n; i++)
	{
		int tden, tnum, m;
		tden = den * i;
		if (i % 2 == 0)
			tnum = num * i + (i - 1) * den;
		else
			tnum = num * i - (i - 1) * den;
		m = gcd(abs(tnum), abs(tden));
		num = tnum / m;
		den = tden / m;
	}
	printf("%d/%d", num, den);
	return 0;
}
