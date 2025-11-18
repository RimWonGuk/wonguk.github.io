#include <iostream>
using namespace std;
class Point{
		int x, y;
	public:
		Point(int a = 0, int b = 0)
		{
			x = a, y = b;
		}
		Point operator ++(int){
			Point temp = *this;
			x += 1;
			y += 1;
			return temp;
		}
		Point operator +(Point& p){
			Point temp;
			temp.x = x + p.x;
			temp.y = y + p.y;
			return temp;
		}
		friend ostream& operator << (ostream& os, const Point& f);
		friend istream& operator >> (istream& is, Point& f);
};
ostream& operator << (ostream& os, const Point& f){
	os << "(" << f.x << "," << f.y << ")";
	return os;
}
istream& operator >> (istream& is, Point& f){
	char ch;
	is >> ch >> f.x >> ch >> f.y >> ch;
	return is;
}
int main()
{
	Point p, p1(1,2), p2;
	cout << p << endl;
	cin >> p;
	p1 = p++;
	cout << p1 << endl;
	cout << p << endl;
	p2 = p + p1;
	cout << p2 << endl;
	return 0;
}
