# Front End Recruitment Test

### This project will be divided in three parts:

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note: `

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?
I spent about 2.5 - 3 hours on the coding.

2. What would you add to your solution if you had more time?
Currently this is a really small app, so all the main code is in App.jsx, if I had more time I would split the code up into different components. One for the main books section and one for the favorites section. I think that would be cleaner and make it easier to edit. I would adjust the css files to match.

3. Share a code snippet that you are proud of and explain what it does
```
 const [readMore, setReadMore] = useState({});

  const toggleReadMore = (index) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

 {readMore[index] && (
                <div>
                  <p>Country: {book.country}</p>
                  <p>Language: {book.language}</p>
                  <p>
                    More Info: 
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Wikipedia
                    </a>
                  </p>
                  <p>Year Published: {book.year}</p>
                </div>
              )}
```

I really enjoyed adding this feature to the page. Using react's useState, I was able to add this feature with conditional rendering. The button calls toggleReadMore(index) when it's clicked. The readMore state is updated to toggle the visibility for the selected book's "Read More" section.


4. How would you track down a performance issue in production? Have you ever had to do this?
While I have not yet had the opportunity to track down a performance issue in production, when I get this opportunity I plant to utilize this method: first I would identify the specific issue, second I would narrow down the scope of the issue, third I would try to recreate the issue in a test environment. Once the issue is testable, I would debug and analyze it to find the solution. Once the solution is found it can then be implemented and monitored.

---

# Comments

---

# Submission

After completing the challenge, commit it to Github.
