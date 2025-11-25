#include <iostream>
using namespace std;

class Point{
		int x, y;
	public:
		Point(int a = 0, int b = 0)
		{
			x = a, y = b;
		}
};

class Shape{
		Point center;
	public:
		Shape(Point p){
			center = p;
		}
};

class Circle: public Shape{
		int radius;
	public:
		Circle(Point pt, int r): Shape(pt){
			radius = r;
		}
};

class Rect: public Shape{
		int width, height;
	public:
		Rect(Point pt, int w, int h): Shape(pt){
			width = w, height = h;
		}
};
int main(){
	Shape sh(Point(1, 2));
	Circle c(Point(2, 2), 5);
	Rect r(Point(0, 0), 10, 4);
}
