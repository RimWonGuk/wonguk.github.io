#include <iostream>
#include <cstring>
using namespace std;
class String{
		char *buf;
		int len;
	public:
		String(const char* s = "")
		{
			len = strlen(s);
			buf = new char[len + 1];	
			strcpy(buf, s);
		}
		String(const String& other)
		{
			len = other.len;
			buf = new char[len + 1];
			strcpy(buf, other.buf);
		}
		~String(){
			delete[] buf;
		}
		friend ostream& operator << (ostream& os, String& s)
		{
			os << s.buf;
			return os;
		}
		friend istream& operator >> (istream& is, String& s)
		{
			char tmp[100];
			is.getline(tmp, 100);
			delete[] s.buf;
			s.len = strlen(tmp);
			s.buf = new char[s.len + 1];
			strcpy(s.buf, tmp);
			return is;
		}
		String& operator =(const String& other)
		{
			delete[] buf;
			len = other.len;
			buf = new char[len + 1];
			strcpy(buf, other.buf);
			return *this;
		}
		String operator +(const String& other)
		{
			String res;
			res.len = len + other.len;
			res.buf = new char[res.len + 1];
			strcpy(res.buf, buf);
			strcat(res.buf, other.buf);
			return res;
		}
		String& operator +=(const String& other)
		{
			*this = *this + other;
			return *this;
		}
};
int main(){
	String s, s1, s2;
	cin >> s1 >> s2;
	String s3(s2);
	cout << s3;
	return 0;
}
