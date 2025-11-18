#include <iostream>
using namespace std;
void Funtion(int& hour, int& minute, int& second)
{
	second += 1;
	if(second >= 60)
	{
		minute += 1;
		second %= 60;
	}
	if(minute >= 60)
	{
		hour += 1;
		minute %= 60;
	}
	if(hour >= 24)
	hour %= 24;	
}
class Time{
		int hour, minute, second;
	public:
		Time(int h = 0, int m = 0, int s = 0)
		{
			hour = h, minute = m, second = s;
		}
		void output()
		{
			cout.fill('0');
			cout.width(2);
			cout << hour << ":";
			cout.width(2);
			cout << minute << ":";
			cout.width(2);
			cout << second << endl;
		}
		Time& operator ++(){
			Funtion(hour, minute, second);
			return *this;
		}
		Time operator ++(int){
			Time temp = *this;
			Funtion(hour, minute, second);
			return temp;
		}
};
int main(){
	Time a(10, 17, 30), b;
	b = a++;
	a.output();
	b.output();
	b = ++a;
	a.output();
	b.output();
	return 0;
}
