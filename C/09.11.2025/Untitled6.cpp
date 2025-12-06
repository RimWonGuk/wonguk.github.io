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
	int k1 = 0, k2 = 0;
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			if (T[i][j] < 7)
				k1++;
			if (C[i][j] < 12)
				k2++;
		}
	if (k1 < k2)
	{
		int S[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
				S[i][j] = T[i][j] + (k1 + k2) * C[i][j];
				cout << S[i][j] << " ";
	}
	else 
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)		
				F[i][j] = k1 * T[i][j] + k2 * C[i][j];
				cout << F[i][j] << " ";
	}
	return 0;
}
