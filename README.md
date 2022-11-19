# Lab 8 - Starter
Anish Rajeshkumar, Xinyi(Cindy) Wang

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed because this allows the program to be checked automatically without the developers having to manually test. By putting it within the Github actions, it fits the builded pipline on the Github. 

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Yes,I would specifically test if the message was delivered to the correct user or not. Furthermore, I would also test of the user actually wrote something and it is not just an empty message/string.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would because testing this would allow me to determine if my program will either cut off character to ensure the 80 character limit or will not allow the user to sen until the user shortens his message to meet the limit. Furthermore, I would test to see if the user did go over the limit if the message would actually send or not.