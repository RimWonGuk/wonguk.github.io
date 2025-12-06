#include <iostream>
using namespace std;
int main()
{
	int n, i, j;
	cout << "Input the n = ";
	cin >> n;
	int T[n][n], C[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			cout << "Input the Matrix T[" << i << "][" << j << "] = ";
			cin >> T[i][j];
			cout << "Input the Matrix C[" << i << "][" << j << "] = ";
			cin >> C[i][j];			
		}
	int k = 0;
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			if (i == j || i + j == n - 1)
			{
				if (T[i][j] % 2 == 0)
					k++;	
			}
	int m = 0;
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
			if (i == j || i + j == n - 1)
			{
				if (C[i][j] % 2 == 0)
					n++;
			}
	if (k < m)
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
				H[i][j] = T[j][i] + k * C[i][j];
	}
	else 
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
				F[i][j] = C[j][i] + m * T[i][j];
	}
	return 0;
}
