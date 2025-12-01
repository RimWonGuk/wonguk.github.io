#include <stdio.h>
int n, a[100];
void func(int step) {
  	if (step == n) {
  		int i;
  		for (i = 0; i < n; i++)
  			printf("%d", a[i]);
  		printf("\n");
  		return;
	}
	
	a[step] = 0;
	func(step + 1);
	a[step] = 1;
	func(step + 1);
}

