#include <iostream>
using namespace std;
int main()
{
	int n, i, j, m, k;
	cin >> n >> m >> k;
	int C[n][n], T[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			cin >> C[i][j] >> T[i][j];
	int p1 = 0, p2 = 0;
	for (i = 0; i < n; i++)
	{
		if (C[m][i] < 0)
			p1++;
		if (T[k][i] > 0)
			p2++;
	}
	if (p1 > 0 && p2 > 0)
	{
		int A[n][n], p3;
		for(i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				A[i][j] = -C[i][j];
				for (p3 = 0; p3 < n; p3++)
					A[i][j] += T[i][p3] * C[p3][j];
				cout << A[i][j] << " ";
			}
	}
	else
	{
		int B[n][n], p4;
		for(i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				B[i][j] = -T[i][j];
				for (p4 = 0; p4 < n; p4++)
					B[i][j] += C[i][p4] * T[p4][j];
				cout << B[i][j] << " ";
			}
	}
	return 0;
}
