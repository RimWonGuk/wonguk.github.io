#include <iostream>
#include <cstring>
using namespace std;

class Pupil{
		char name[100];
	public:
		static int count;
		int num;
		Pupil(const char* p = "NoName"){
			strcpy(name, p);
			num = count;
			count++;
		}
		void setName(const char *s){
			strcpy(name, s);
		}
		static void SetNo(int n){
			count = n;
		}
		void output()
		{
			cout << num << ", " << name << endl;
		}
		Pupil(Pupil& p){
			num = count;
			strcpy(name, p.name);
			count++;
		}
};
int Pupil::count = 1;
int main(){
	Pupil a("ZhangHyokSong");
	Pupil b = a;
	b.setName("RiHyok");
	Pupil::SetNo(5);
	Pupil c;
	a.output();
	b.output();
	c.output();
	return 0;
}
