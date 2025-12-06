#include <iostream>
using namespace std;
int main()
{
	int n, l, m, i, j;
	cin >> n >> l >> m;
	if (n > l && n > m)
	{
		int T[n][n], C[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
				cin >> T[i][j] >> C[i][j];
		if(l < m)
		{
			int A[n][n], k1 = 0;;
			for (i = 0; i < n; i++)
				for (j = 0; j < n; j++)
				{
					A[i][j] = l * T[i][j] + m * C[i][j];
					cout << A[i][j] << " ";
				}
			for (i = 0; i < n; i++)
				if (A[i][l] > 0)
					k1++;
			cout << k1;
		}
		else
		{
			int B[n][n], k2 = 0;;
			for (i = 0; i < n; i++)
				for (j = 0; j < n; j++)
				{
					B[i][j] = l * l * C[i][j] + m * m * T[i][j];
					cout << B[i][j] << " ";
				}
			for (i = 0; i < n; i++)
				if (B[i][m] > 0)
					k2++;
			cout << k2;
		}
		
	}
	else
	{
		cout << "error";
		return 0;
	}
	return 0;
}
