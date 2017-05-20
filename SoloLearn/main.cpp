#include <iostream>
#include <math.h>
#include <string.h>

using namespace std;
//Function to print a matrix of 3x3.
int main()
{
    int arr[3][3];

    for ( int i =0 ; i<3 ; i++){
        for (int j=0; j<3; j++){
            cin>>arr[i][j];
        }
    }

        for ( int i =0 ; i<3 ; i++){
           for (int j=0; j<3; j++){
            cout<<arr[i][j]<<"\t";
        }
        cout<<"\n";
    }


return 0;
}
