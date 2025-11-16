#include <iostream>
using namespace std;

class Fraction{
	private:
		int num, den;
	public:
		Fraction(int i = 0, int j = 0)
		{
			num = i;
			den = j;
		}
		Fraction add(Fraction c)
		{
			Fraction d;
			d.num = num * c.den + den * c.num;
			d.den = den * c.den;
			return d;
		}
		void display(){
			cout << num << "/" << den;
		}
};

int main()
{
	Fraction a, b(7, 3), c(2, 3);
	a = b.add(c);
	a.display();
	return 0;
}
