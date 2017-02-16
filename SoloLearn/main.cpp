#include <iostream>
#include <math.h>
#include <string.h>

using namespace std;

int main()
{
string s;
cin>>s;
char chaArr[s.length()];
strcpy(chaArr,s.c_str());

  if (s.length()%2==0){
    for (int i = 0, j = s.length()-1; i< (s.length()/2), j>(s.length()/2)+ 1; i++, j--){
             if(i==(s.length()/2)-1 && j==s.length()/2 && chaArr[i]==chaArr[j]){

                    cout<<"YES"<<endl;
            }

            else if (chaArr[i] == chaArr[j]){
                i++;
                j--;
            }
            else{
                cout<<"NO"<<endl;
            }

    }

  }

  else{
    for (int i=0, j=s.length()-1; i< (s.length()/2)+1,j>(s.length()/2)- 1; i++,j--){
            if(i==(s.length()/2) && j==s.length()/2 && chaArr[i]==chaArr[j]){

                    cout<<"YES"<<endl;
            }
            else if (chaArr[i] == chaArr[j]){
                i++;
                j--;
            }

            else{
                cout<<"NO"<<endl;
                break;
            }

    }
  }

return 0;
}
