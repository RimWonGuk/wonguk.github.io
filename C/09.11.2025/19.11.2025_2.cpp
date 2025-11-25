#include <iostream>
using namespace std;
class Array{
		int n;
		int* buf;
	public:
		Array(int k = 1){
			n = k;
			buf = new int[n];
			int i;
			for (i = 0; i < n; i++)
				buf[i] = 0;
		}
		friend istream& operator >> (istream& is, Array& a);
		friend ostream& operator << (ostream& os, const Array& a);
		int& operator [](int b)
		{
			return buf[b];
		}
		~Array()
		{
			delete[] buf;
		}
};
istream& operator >> (istream& is, Array& a)
{
	int i;
	for(i = 0; i < a.n; i++)
		is >> a.buf[i];
	return is;
}
ostream& operator << (ostream& os, const Array& a)
{
	int i;
	for (i = 0; i < a.n; i++)
		os << a.buf[i] << " ";
	return os;
}
int main(){
	Array a(10);
	cout << a << endl;
	cin >> a;
	cout << a << endl;
	a[5] = 20;
	cout << a[5] << endl;
	return 0;
}
