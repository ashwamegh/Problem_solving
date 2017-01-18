/**********Author : Shashank Shekhar <shashank7200@gmail.com> *********/
/**********Thanks for likes and comments*********/

//The algorithm genrates a username and a password

import java.util.Random;

public class AutoUsernamePasswordGenerator {

        private final static String uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        private final static String lowercase= "abcdefghijklmnopqrstuvwxyz";
        private final static String numbers="0123456789";
        private final static String characters="`~!@#$%^&*()-_+=/<>[]{}|?";

    public static void main(String[] args) {
        int length=12;
        
        System.out.print("Your Username is : ");
        System.out.println(generateUsername(length-2));

        System.out.print("Your Auto Generated Password is : ");
        System.out.println(generatePassword(length));
    }

      //Username Generating Function //

    static char[] generateUsername(int length){
    	String username = lowercase+numbers;
    	Random rand =new Random();
        char[] userName= new char[length-2];

    	for (int i=0; i<length-2 ;i++ ) {
        	userName[i] = username.charAt(rand.nextInt(username.length()));
            }

        return userName;
    }

        //Password Generating Function //

        static char[] generatePassword(int length){

        String combinedChar=(uppercase+lowercase+numbers+characters);
        

        Random rand =new Random();
        char[] password= new char[length];
        for (int i=0; i<length ;i++){
        	password[i]= combinedChar.charAt(rand.nextInt(combinedChar.length()));
            }
        return password;
    }

}