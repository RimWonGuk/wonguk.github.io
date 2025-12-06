#include <iostream>
using namespace std;
int main()
{
	int i, j, S1 = 0, S2 = 0, n;
	cout << "Input the n=";
	cin >> n;
	int C[n][n], T[n][n];
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			cout << "Input the matrix C[" << i << "]" << "[" << j << "]=";
			cin >> C[i][j];
		}
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			if(i == j || i + j == n - 1)
			S1 += C[i][j];
		}
	cout << "Output the S1 =" << S1 << endl;
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{		
			cout << "Input the matrix T[" << i << "][" << j << "]=";
			cin >> T[i][j];	
		}
	for (i = 0; i < n; i++)
		for (j = 0; j < n; j++)
		{
			if(i == j || i + j == n - 1)
			S2 += C[i][j];			
		}
	cout << "Output the S2 =" << S2 << endl;
	if(S1 < S2)
	{
		int H[n][n];
		for (i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				H[i][j] = S1 + S1 * T[i][j];
				cout << "H[" << i << "][" << j << "]=" << H[i][j] << " "; 	
			}
		cout << endl;
	}
	else
	{
		int Z[n][n];
		for(i = 0; i < n; i++)
			for (j = 0; j < n; j++)
			{
				Z[i][j] = S2 + S2 * (T[i][j] + C[i][j]);
				cout << "Output the matrix Z[" << i << "][" << j << "]=" << Z[i][j] << " "; 	
			}
		cout << endl;
	}
	return 0;
}
