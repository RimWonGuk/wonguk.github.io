#include <iostream>
#include <stdio.h>
using namespace std;

typedef enum{
	RECTANGLE,	
	CIRCLE
}SHAPE;

typedef struct{
	int x, y;
}Point;

typedef struct{
	SHAPE kind;
	Point center;
	union{
		struct{
			int length, width;
		}rectangle;
		struct{
			int radius;
		}circle;
	}u;
}Shape;

void input(Shape *p)
{
	scanf("%d", &p->kind);
	if(p->kind == RECTANGLE)
		cin >> p->center.x >> p->center.y >> p->u.rectangle.length >> p->u.rectangle.width;
	else if(p->kind == CIRCLE)
		cin >> p->center.x >> p->center.y >> p->u.circle.radius;
}

void print(Shape p)
{
	if(p.kind == RECTANGLE)
		cout << "Rectangle:(" << p.center.x << ", " << p.center.y << "), (" << p.u.rectangle.length << ", " << p.u.rectangle.width << ")";
	else if(p.kind == CIRCLE)
		cout << "Circle:(" << p.center.x << ", " << p.center.y << "), " << p.u.circle.radius;
}
int get_area(Shape p)
{
	int s;
	if(p.kind == RECTANGLE)
		s = p.u.rectangle.length *  p.u.rectangle.width;
	else if(p.kind == CIRCLE)
		s = 3.14 * p.u.circle.radius * p.u.circle.radius;
	return s;
}
void move(Shape *p, Point m)
{
	p->center.x += m.x;
	p->center.y += m.y;
}
int main()
{
	Shape s;
	Point m = {5, 10};
	input(&s);
	print(s);
	cout << get_area(s) << endl;
	move(&s, m);
	print(s);
	return 0;
}
