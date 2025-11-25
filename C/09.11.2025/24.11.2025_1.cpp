#include <iostream>
#include <cstring>
using namespace std;
class shape{
	protected:
		char color[10];
	public:
		shape(char* _color)
		{
			strcpy(color, _color);
		}
		virtual void Draw(){
			cout << color << endl;
		}
};
class circle: public shape{
		int radius;
	public:
		circle(char* _color, int r): shape(_color){
			radius = r;
		}
		void Draw(){
			cout << color << " circle " << 3.14 * radius * radius << endl;
		}
};
class rect: public shape{
		int width, height;
	public:
		rect(char* _color, int w, int h): shape(_color){
			width = w, height = h;
		}
		void Draw(){
			cout << color << " rect " << width * height << endl;
		}
};
class tria: public shape{
		int height, base;
	public:
		tria(char* _color, int b, int h): shape(_color){
			base = b, height = h;
		}
		void Draw(){
			cout << color << " tria " << 0.5 * height * base << endl;
		}
};
int main(){
	circle c("blue", 100);
	rect r("green", 30, 90);
	tria t("red", 50, 70);
	shape* p = &c;
	p->Draw();
	p = &r;
	p->Draw();
	p = &t;
	p->Draw();
	return 0;
	
}
