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
			cout << "Input the matrix T[" << i << "][" << j << "] = ";
			cin >> T[i][j];
		}
	int a = 0;
	for (i = 0; i < n; i++)
		for (j = i + 1; j < n; j++)
			a += T[i][j];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			cout << "Input the matrix C[" << i << "][" << j << "] = ";
			cin >> C[i][j];
		}
	int b = 0;
	for (i = 0; i < n; i++)
		for (j = i + 1; j < n; j++)
			b += C[i][j];
	if (a > b)
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = T[i][j] - a * b * C[i][j];
				cout << "H[" << i << "][" << j << "] = " << H[i][j] << " ";	
			}
	}
	else
	{
		int F[n][b];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				F[i][j] = C[i][j] + a * T[i][j];
				cout << "F[" << i << "][" << j << "] = " << F[i][j] << " ";
			}
	}
	return 0;
}
