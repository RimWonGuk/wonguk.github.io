#include <iostream>
using namespace std;
int main()
{
	int n, i, j, m, k;
	cin >> n >> m >> k;
	int T[n][n], C[n][n], B[n][n], D[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			cin >> T[i][j] >> C[i][j];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			B[i][j] = T[i][j] - k * C[i][j];
			D[i][j] = C[i][j] + m * T[i][j];
		}
	for (i = 0; i < n; i++)
	{
		if (B[i][m] > 1)
		{
			cout << "B[" << i << "][" << j << "]";
			break;
		}
	}
	for (i = 0; i < n; i++)
	{
		if (D[i][m] > 1)
		{
			cout << "D[" << i << "][" << j << ']';
			break;
		}
	}
	return 0;
}
