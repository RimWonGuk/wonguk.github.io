#include <iostream>
using namespace std;
class Date{
		int a, b, c;
	public:
		void SetYear(int i)
		{
			a = i;
		}
		void SetMonth(int j)
		{
			b = j;
		}
		void SetDay(int k)
		{
			c = k;
		}
		int GetYear(){
			return a;
		}
		int GetMonth(){
			return b;
		}
		int GetDay(){
			return c;
		}
};
int main()
{
	Date day;
	day.SetYear(2025);
	day.SetMonth(11);
	day.SetDay(4);
	cout << day.GetYear() << "/" << day.GetMonth() << "/" << day.GetDay() << endl;
	return 0;
}
