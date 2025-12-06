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
	int S = 0, P = 0;
	for (i = 0; i < n; i++)
	{
		S += T[n - 1][i] + T[i][n - 1];
		P += C[n - 1][i] + C[i][n - 1];
	}
	if (S > P)
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				F[i][j] = C[i][j] + 2 * T[j][i];
				cout << F[i][j] << " ";
			}
	}
	else
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = T[i][j] + 5 * C[j][i];
				cout << H[i][j] << " ";
			}
	}
	return 0;
}
