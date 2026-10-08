# COMP3123 Lab Test 1

Student: Mechel Fernando  
Student ID: 101352126

## Run the scripts

Open a terminal in this project folder. Node.js is required. No extra packages are needed.

```bash
node Q1/lowerCaseWords.js
node Q2/promises.js
node Q3/add.js
node Q3/remove.js
```

Question 1 keeps only strings and changes them to lowercase. The function returns a promise and rejects input that is not an array.

Question 2 has one promise that resolves and another that rejects after 500 ms. Each call handles its own result.

Question 3 creates ten text files in Logs, then removes the files and the folder. Run add.js before remove.js to see both outputs. Run both commands from the same project folder because they use the current working directory.
