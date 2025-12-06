#include <iostream>
using namespace std;
int main()
{
	int n, i, j, k;
	cout << "Input the n = ";
	cin >> n;
	int C[n][n], T[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			cout << "Input the C[" << i << "][" << j << "] = ";
			cin >> C[i][j];
			cout << "Input the T[" << i << "][" << j << "] = ";
			cin >> T[i][j];
		}
	int k1 = 0, k2 = 0;
	for (i = 1; i < n; i++)
		for (j = 0; j < i; j++)
		{
			if (C[i][j] < 0)
				k1++;
			if (T[i][j] < 0)
				k2++;
		}
	cout << "k1 = " << k1 << endl;
	cout << "k2 = " << k2 << endl;
	if (k1 > k2)
	{
		int F[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				F[i][j] = -C[j][i];
				for(k = 0; k < n; k++)
					F[i][j] += C[i][k] * T[k][j];
				cout << "F[" << i << "][" << j << "] = " << F[i][j] << " ";
			}
	}
	else
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = C[j][i];
				for (k = 0; k < n; k++)
					H[i][j] -= T[i][k] * C[k][j];
				cout << "H[" << i << "][" << j << "] = " << H[i][j] << " ";
			}
	}
	return 0;
}
