#include <iostream>
#include <cstring>

using namespace std;

int compare(char *a, char *b)
{
	if(a[0] == '-')
	{
		if(b[0] == '-')
			return -compare(a + 1, b + 1);
		else
			return -1;
	}
	else
	{
		if(b[0] == '-')
			return 1;
		if(strlen(a) != strlen(b))
			return strlen(a) - strlen(b);
		return strcmp(a, b);
	}
}

int main()
{
	int n, i, j;
	cout << "Put the n = ";
	cin >> n;
	char **str, temp[101];
	str = new char* [n];
	for(i = 0; i < n; i++)
	{
		str[i] = new char[101];
		cout << "Put the str[" << i << "] = ";
		cin >> str[i];
	}
	for (i = 0; i < n; i++)
	{
		for (j = i + 1; j < n; j++)
		if(compare(str[i], str[j]) > 0)
		{
			strcpy(temp, str[i]);
			strcpy(str[i], str[j]);
			strcpy(str[j], temp);
		}
	}
	for (i = 0; i < n; i++)
	{
		cout << str[i] << endl;
		delete[] str[i];
	}
	return 0;
}
