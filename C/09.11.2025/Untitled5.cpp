#include <iostream>
using namespace std;
int main()
{
	int n, i, j;
	cin >> n;
	int T[n][n], C[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			cin >> T[i][j] >> C[i][j];
	int k = 0, m = 0;
	for (i = 1; i < n; i++)
		for (j = n - i; j < n; j++)
		{
			if (T[i][j] % 2 == 1)
				k++;
			if (C[i][j] % 2 == 1)
				m++;
		}
	if (k > m)
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = 1 / m * T[i][j] + C[i][j];
				cout << H[i][j] << " ";	
			}
	}
	else 
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				F[i][j] = k * (C[i][j] + T[i][j] + T[i][j]);
				cout << F[i][j] << " ";
			}	
	}
	return 0;
}

