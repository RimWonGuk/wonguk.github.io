#include <iostream>
using namespace std;
int main()
{
	int n, i, j;
	cin >> n;
	int C[n][n], T[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			cin >> C[i][j] >> T[i][j];
	int s1 = 0, s2 = 0;
	for (i = 0; i < n; i++)
	{
		s1 += C[i][n - 1 - i];
		s2 += T[i][n - 1 - i];
	}
	if (s1 > s2)
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = T[i][j] + 2 * C[i][j];
				cout << H[i][j] << " ";
			}
	}
	else 
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				F[i][j] = C[i][j] - 5 * T[i][j];
				cout << F[i][j] << " ";
			}
	}
	return 0;
}
