#include <iostream>
using namespace std;
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
		bool operator > (const Fraction& a){
			if(num * a.den > a.num * den)
				return true;
			else
				return false;
		}
		bool operator < (const Fraction& a){
			if(num * a.den < a.num * den)
				return true;
			else 
				return false;
		}
		bool operator == (const Fraction& a){
			if(num * a.den == a.num * den)
				return true;
			else
				return false;
		}
		bool operator != (const Fraction& a){
			if(num * a.den != a.num * den)
				return true;
			else
				return false;
		}
		void ouput(){
			cout << num << "/" << den <<endl;
		}
};
int main()
{
	Fraction a, b;
	a.input();
	b.input();
	if(a < b)
		cout << "< :", a.ouput();
	if(a > b)
		cout << "> :", a.ouput();
	if(a == b)
		cout << "==" << endl;
	if(a != b)
		cout << "!=" << endl;
	return 0;
}
