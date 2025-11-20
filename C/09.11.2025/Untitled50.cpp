#include <iostream>
#include <cstring>
#include <cmath>
using namespace std;
int main()
{
	char c[100], d[100];
	int a, b, i, sum = 0, len;
	cin >> a >> b;
	cin >> c;
	len = strlen(c);
	for (i = 0; c[i]; i++)
	{
		sum += (c[i] - '0') * pow(a, len-- - 1);
	}
	for (i = 0; sum > 0; i++)
	{
		d[i] = sum % b + '0';
		switch(d[i] - '0')
		{
			case 11: 
				d[i] = 'A'; 
				break;
			case 12: 
				d[i] = 'B'; 
				break;
			case 13: 
				d[i] = 'C';
				break;
			case 14: 
				d[i] = 'D';
				break;
			case 15: 
				d[i] = 'E'; 
				break;
			case 16:
				d[i] = 'F'; 
				break;
		}
		sum = sum / b;
	}
	d[i] = 0;
	strrev(d);
	cout << d << endl;
	return 0;
}
