#include <stdio.h>

int digitr(int n, int k)
{
	int i, count = 0,  s[100], x;
	while (n > 0)
	{
		s[count++] = n % 10;
		n /= 10;
	}
	if (k > count)
		x = -1;
	else
		x = s[k - 1];
		return x;
}
int digitr1(int n, int k)
{
		int i, count = 0,  s[100], x;
	while (n > 0)
	{
		s[count++] = n % 10;
		n /= 10;
	}
	if (k > count)
		x = -1;
	else
		x = s[count - k];
	return x;
}
int main()
{
	int n, k;
	scanf("%d%d", &n, &k);
	printf("%d/%d", digitr(n, k), digitr1(n, k));
	return 0;
}

