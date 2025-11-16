#include <iostream>
#include <cmath>
using namespace std;

struct Real{
	int a;
	int b;
};

void Print(Real r, int count)
{
	cout << r.a << ".";
	while(r.b > pow(10, count))
		r.b /= 10;
	cout << r.b << endl;
}

int main()
{
	struct Real t;
	int n;
	char k;
	cin >> t.a >> k >> t.b;
	cin >> n;
	Print(t, n);
	return 0;
}
