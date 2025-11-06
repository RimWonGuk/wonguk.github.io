#include <iostream>
using namespace std;
class Date{
	private:
		int year, month, day;
	public:
		Date(int y = 0, int m = 0, int d = 0)
		{
			year = y, month = m, day = d;
		}
		void display()
		{
			cout << year << "/" << month << "/" << day;
		}
};
class Time{
		int hour, minute, second;
	public:
		Time(int h = 0, int mi = 0, int s = 0)
		{
			hour = h, minute = mi, second = s;
		}
		void display()
		{
			cout << hour << ":" << minute << ":" << second;
		}
};
class DateTime{
		Date date;
		Time time;
	public:
		DateTime(Date da, Time ti)	
		{			
			date = da, time = ti;
		}
		void display()
		{
			date.display();
			cout << " ";
			time.display();
			cout << endl;
		}
		Date getDate()
		{
			return date;
		}
		Time getTime()
		{
			return time;
		}
};
int main()
{
	DateTime a(Date(2016, 5, 13), Time(10, 10, 0));
	a.display();
	a.getDate().display();
	cout << endl;
	a.getTime().display();
	return 0;
}
