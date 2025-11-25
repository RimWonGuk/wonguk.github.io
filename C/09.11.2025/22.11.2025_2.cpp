#include <iostream>
using namespace std;

struct Point{
	int x, y;
};

class Shape{
	protected:
		Point p;
	public:
		Shape(int c = 0, int d = 0)
		{
			p.x = c, p.y = d;
		}
		void show(){
			cout << "(" << p.x << "," << p.y << ")" << endl;
		}
};

class Rect: public Shape{
		int width, height;
	public:
		Rect(Point pt, int w, int h): Shape(pt.x, pt.y)
		{
			width = w, height = h;
		}
		void show(){
			cout << width * height << endl;
		}
};

class Circle: public Shape{
		int radius;
	public:
		Circle(Point pt, int d): Shape(pt.x, pt.y)
		{
			radius = d;
		}
		void show(){
			cout << 3.14 * radius * radius << endl;
		}
};
int main()
{
	Point pt;
	cin >> pt.x >> pt.y;
	Shape s(pt.x, pt.y);
	Rect rt(pt, 5, 6);
	Circle c(pt, 5);
	s.show();
	rt.show();
	c.show();
	return 0;
}

