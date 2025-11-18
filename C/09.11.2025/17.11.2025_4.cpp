#include <iostream>
using namespace std;
class Time{
		int hour, minute, second;
	public:
		Time(int h = 0, int m = 0, int s = 0){
			hour = h, minute = m, second = s;
		}
		void output(){
			cout.fill('0');
			cout.width(2);
			cout << hour << ":";
			cout.width(2);
			cout << minute << ":";
			cout.width(2);
			cout << second << endl;
		}
		bool operator ==(const Time& b)
		{
			if (hour == b.hour && minute == b.minute && second == b.second)
				return true;
			else
				return false;
		}
		bool operator !=(const Time& b)
		{
			if (hour != b.hour || minute != b.minute || second != b.second)
				return true;
			else
				return false;
		}
		Time* operator +=(const Time& b)
		{
			second += b.second;
			if(second >= 60)
			{
				minute += second / 60;
				second %= 60;
			}
			minute += b.minute;
			if(minute >= 60)
			{
				hour += minute / 60;
				minute %= 60;
			}
			hour += b.hour;
			if(hour >= 24)
				hour %= 24;
			return this;
		}
};
int main(){
	Time a(10, 17, 30), b(20, 25, 55);
	if(a == b)
		cout << "Same" << endl;
	if(a != b)
		cout << "Different" << endl;
	a += b;
	a.output();
	return 0;
}
