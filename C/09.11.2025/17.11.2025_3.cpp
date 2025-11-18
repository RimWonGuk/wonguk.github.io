#include <iostream>
using namespace std;
class Time{
		int hour, minute, second;
	public:
		Time(int h = 0, int m = 0, int s = 0){
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
		friend Time operator +(const Time& a, int n);
		friend Time operator -(const Time& a, int n);
};
Time operator +(const Time& a, int n){
	Time temp;
	temp.hour = a.hour, temp.minute = a.minute, temp.second = a.second;
	temp.second += n;
	if(temp.second >= 60)
	{
		temp.minute += temp.second / 60;
		temp.second %= 60;
	}
	if(temp.minute >= 60)
	{
		temp.hour += temp.minute / 60;
		temp.minute %= 60;
	}
	if(temp.hour >= 24)
		temp.hour %= 24;
	return temp;
}
Time operator -(const Time& a, int n){
	Time temp;
	temp.hour = a.hour, temp.minute = a.minute, temp.second = a.second;
	int k;
	for (k = 0; ; k++)
		if(temp.second + k * 60 - n >= 0)
		{
			temp.second += k * 60 - n;
			break;
		}
	int i;
	for(i = 0; ; i++)
		if (temp.minute + i * 60 - k >= 0)
		{
			temp.minute += i * 60 - k;
			break;
		}
	int j;
	for(j = 0; ;j++)
		if(temp.hour + j * 24 - i >= 0)
		{
			temp.hour += j * 24 - i;
			break;
		}
	return temp;
}
int main(){
	Time a(10, 17, 30), b(20, 25, 55), c;
	c = a + 1234;
	c.output();
	c = a - 6892;
	c.output();
	return 0;
}
