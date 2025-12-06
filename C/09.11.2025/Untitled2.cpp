#include <iostream>
using namespace std;
int main()
{
	int n, i, j;
	cout << "Input the n = ";
	cin >> n;
	int C[n][n], T[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			cout << "Input the matrix C[" << i << "][" << j << "] = ";
			cin >> C[i][j];
		}
	int a, K1 = 0;
	cout << "Input the a = ";
	cin >> a;
	for (i = 0; i < n; i++)
		for (j = n - i - 1; j < n; j++)
			if (C[i][j] < a)
				K1++;
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			cout << "Input the matrix T[" << i << "][" << j << "] = ";
			cin >> T[i][j];
		}
	int b, K2 = 0;
	cout << "Input the b = ";
	cin >> b;
	for (i = 0; i < n; i++)
		for (j = n - i - 1; j < n; j++)
			if (T[i][j] < b)
				K2++;
	if (K1 < K2)
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for(j = 0; j < n; j++)
			{
				F[i][j] = T[i][j] + 2 * K1 * C[i][j];
				cout << "F[" << i << "][" << j << "] = " << F[i][j] << " ";
			}
	}
	else
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = 2 * C[i][j] - K2 * T[i][j];
				cout << "H[" << i << "][" << j << "] = " << H[i][j] << " ";
			}
	}
	return 0;
}
