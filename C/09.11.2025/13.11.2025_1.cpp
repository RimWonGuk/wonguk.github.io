#include <iostream>
using namespace std;
class Fraction{
		int numerator, denominator;
	public:
		void intput(){
			char s;
			cin >> numerator >> s >> denominator;	
		}
		Fraction operator+(const Fraction& a){
			Fraction temp;
			temp.denominator = denominator * a.denominator;
			temp.numerator = numerator * a.denominator + a.numerator * denominator;
			return temp;
		}
		Fraction operator-(const Fraction& a){
			Fraction temp;
			temp.denominator = denominator * a.denominator;
			temp.numerator = numerator * a.denominator - a.numerator * denominator;
			return temp;
		}
		void output(){
			cout << numerator << "/" << denominator << endl;
		}
};
int main()
{
	Fraction a, b, c;
	a.intput();
	b.intput();
	c = a + b;
	c.output();
	c = a - b;
	c.output();
	return 0;
}
