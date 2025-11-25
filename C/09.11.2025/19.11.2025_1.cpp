#include <iostream>
using namespace std;
class Time{
		int h, m, s;
	public:
		Time(){
			h = m = s = 0;
		}
		friend istream& operator >> (istream& is, Time& t);
		friend ostream& operator << (ostream& os, const Time& t);
		int& operator [](int n)
		{
			if (n == 0)
				return h;
			if (n == 1)
				return m;
			if (n == 2)
				return s;
		}
};
istream& operator >> (istream& is, Time& t)
{
	char ch;
	is >> t.h >> ch >> t.m >> ch >> t.s;
	return is; 
}
ostream& operator << (ostream& os, const Time& t)
{
	int h = t.h;
	if(h > 12)
		h -= 12;
	os << h << ":" << t.m << ":" << t.s;
	if (t.h >= 12)
		os << " PM";
	else
		os << " AM";
	return os;
}
int main(){
	Time t;
	cin >> t;
	cout << t << endl;
	cout << t[0] << "h" << t[1] << "m" << endl;
	return 0;
}
