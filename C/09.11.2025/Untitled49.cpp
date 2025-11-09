#include <iostream>
using namespace std;
int main()
{
	char str1[100], str2[100];
	int n, i, s = 0, j = 0;
	cin >> str1;
	cin >> n;
	for (i = 0; str1[i]; i++)
	{
		s = 10 * s + str1[i] - '0';
		if (s < n)
			continue;
		str2[j++] = s / n + '0';
		s = s % n;
	}
	str2[j] = 0;
	cout << str2 << endl;
	cout << s;
	return 0;
}
