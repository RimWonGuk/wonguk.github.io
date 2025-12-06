#include <iostream>
using namespace std;
int main()
{
	int n, i, j, k;
	cin >> n;
	int T[i][j], C[i][j];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			cin >> T[i][j] >> C[i][j];
	int k1 = 0, k2 = 0;
	for (i = 0; i < n; i++)
		for (j = i + 1; j < n; j++)
		{
			if (T[i][j] > 0 && T[i][j] % 5 == 0)
				k1++;
			if (C[i][j] > 0 && C[i][j] % 3 == 0)
				k2++;
		}
	if (k1 > k2)
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				F[i][j] = 3 * C[i][j];
				for (k = 0; k < n; k++)
					F[i][j] += T[i][k] * C[k][j];
				cout << F[i][j] << " ";
			}
	}
	else
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = 5 * T[i][j];
				for (k = 0; k < n; k++)
					H[i][j] += C[i][k] * T[k][j];
				cout << H[i][j] << " ";
			}
	}
	return 0;
}
