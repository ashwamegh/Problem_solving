import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class CaesarCipherAlgorithm{

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String s = in.next();
        int k = in.nextInt();
        String encrypted="";

        for (int i=0 ; i<n; i++){

        	int charac=s.charAt(i);
        	if(Character.isAlphabetic(charac)){
        		if(Character.isUpperCase(charac)){
        			charac=charac+(k%26);
        			if(charac>'Z')
        				charac=charac-26;
        		}
        		if(Character.isLowerCase(charac)){
        			charac=charac+(k%26);
        			if(charac>'z')
        				charac=charac-26;
        		}
        	}

        	encrypted=encrypted+(char) charac;
        }

        System.out.println(encrypted);
        }

    }
