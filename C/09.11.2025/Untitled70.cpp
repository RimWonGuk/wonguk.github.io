#include <iostream>
#include <cstring>
using namespace std;
const char *buf[] = {"", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nor", "Dec"};
class Month{
		int month;
	public:
		Month(int n = 1)
		{
			month = n;
		}
		Month(const char* s)
		{
			for (int i = 1; i < 12; i++)
			{
				if(strcmp(buf[i], s) == 0){
					month = i;
					return;
				}
			}
			month = -1;
		}
		void display(int f)
		{
			if(f)
				cout << buf[month] << endl;
			else
				cout << month << endl;
		}
};
int main()
{
	Month a, b(4), c("May");
	a.display(0);
	a.display(1);
	b.display(0);
	b.display(1);
	c.display(0);
	c.display(1);
	return 0;
}
