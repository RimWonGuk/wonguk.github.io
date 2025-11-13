#include <iostream>
using namespace std;

int gcd(int a, int b)
{
	int r;
	while(b)
	{
		r = a % b;
		a = b;
		b = r;
	}
	return a;
}
class Fraction{
		int num, den;
	public:
		Fraction(int n = 0, int d = 1){
			num = n, den = d;
		}
		void input(){
			char s;
			cin >> num >> s >> den;
		}
		void output(){
			int k = gcd(num, den);
			num /= k;
			den /= k;
			if(den < 0)
			{
				num = -num;
				den = -den;
			}
			cout << num << "/" << den << endl;
		}
		Fraction *operator += (const Fraction& a){
			num = num * a.den + a.num * den;
			den *= a.den;
			return this;
		}
		Fraction *operator -= (const Fraction& a){
			num = num * a.den - a.num * den;
			den *= a.den;
			return this;
		}
};
int main(){
	Fraction a, b;
	a.input();
	b.input();
	a += b;
	a.output();
	a -= b;
	a.output();
	return 0;
}
