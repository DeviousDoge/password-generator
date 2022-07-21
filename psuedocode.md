-DECLARE vars
  -final result-
 0.string password (result) 
 (strings function as an array of individual characters)
  -windows-
 1.num passLength (user input)
  (window prompt accepting values 8-128. Values under 8 and over 128 terminate program)
 2.bool useUpper (user input)
  (window prompt confirming or denying wether the upperchars array is concat into the choices array)
 3.bool useLower (user input)
 (window prompt confirming or denying wether the lowerchars array is concat into the choices array)
 4.bool useSpecial (user input)
 (window prompt confirming or denying wether the specialchars array is concat into the choices array)
 5.bool useNumber 
 (window prompt confirming or denying wether the numChars array is concat into the choices array)
  -arrays-
 6.array lowerChars
 (Contains every loweCase letter in the alphebet)
 7.array upperChars
 (Contains every upperCase letter in the alphebet)
 8.array specialChars
 (Contains every valid special character for passwords)
 9.array numChars
 (contains every single digit number)
 -the final array determines what characters will be pulled from a random number generator and pushed into the password string
 10.array choices 
 (array containing all characters chosen by user)

-PROMPT user for password length

-CONFIRM user for lowerCase letters

-CONFIRM user for upperCase letters

-CONFIRM user for specialChars

-CONFIRM user for numbers

^^^^^^^^^^^^^^^^
all of this is already done from defining the variables

-IF useUpper = true, concat upperChars into choices;
-IF useLower = true, concat lowerChars into choices;
-IF useSpecial = true, concat specialChars into choices;
-IF useNumber = true, concat numChars into choices;

-console.log(choices)


-random number generator that pulls from the choices array and applies a random character to password
-random number generator runs for passLength amount of times
