#include <iostream>
using namespace std;
class Time{
		int hour, minute, second;
	public:
		Time(int h = 0, int m = 0, int s = 0)
		{
			hour = h, minute = m, second = s;
		}
		Time operator +(const Time& a){
			Time temp;
			temp.second = second + a.second;
			if(temp.second >= 60)
			{
				temp.minute = temp.second / 60;
				temp.second %= 60;
			}
			temp.minute += minute + a.minute;
			if(temp.minute >= 60)
			{
				temp.hour = temp.minute / 60;
				temp.minute %= 60;
			}
			temp.hour += hour + a.hour;
			if (temp.hour >= 24)
				temp.hour %= 24;
			return temp;
		}
		Time operator -(const Time& b){
			Time temp;
			temp.second = second - b.second;
			if (temp.second < 0)
			{
				minute -= 1;
				temp.second += 60;
			}
			temp.minute = minute - b.minute;
			if(temp.minute < 0)
			{
				hour -= 1;
				temp.minute = 60 + minute - b.minute;
			}
			temp.hour = hour - b.hour;
			if (temp.hour < 0)
				temp.hour += 24;
			return temp;
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
};
int main(){
	Time a(10, 17, 30), b(20, 25, 55), c;
	c = a + b;
	c.output();
	c = a - b;
	c.output();
	return 0;
}
