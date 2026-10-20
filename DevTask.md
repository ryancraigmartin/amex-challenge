# Introduction

You have been asked to pick up a project that has been started by another developer, but remains in an incomplete state.

Firstly, the project set-up is the absolute bare minimum, only including a tiny build process and a tsconfig.json.

The project itself contains a framework, a caching fetch library, and a web application.

The framework is complete. It contains:
* a server
* a client runtime
* an MSW mock server, to allow you to run this project without a network connection.

The application is also complete. It will render a very basic directory of people.

The caching fetch library, however, is incomplete, and needs work.

# Onboarding

```bash
npm i
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the app running.

You should see a welcome page with 2 links to other pages.

When visiting the links:
* on http://127.0.0.1:3000/appWithoutSSRData you will see 
  - `Error: UseCachingFetch has not been implemented`
* on http://127.0.0.1:3000/appWithSSRData you will see
  - ```{
    "statusCode": 500,
    "error": "Internal Server Error",
    "message": "preloadCachingFetch has not been implemented"
    }

You are now ready to begin the tasks. Please read the below completely before beginning.

# Tasks

There are two tasks to work on inside of this repo. Please spend no more than 2 hours in total. Each task is of equal importance, so it is better to partially complete both tasks, rather than fully complete one.

You can work on the two tasks in any order, or interleave them if you prefer.

## Task 1 - configure and document the repository

The project is missing a number of things that would be expected in a production-ready project. You should add these things and document them in the README.md, which is currently empty.

You are free to configure the project however you like. What is important is that you document the choices you make and why you made them.

If you run out of time to perform the actual configuration, please document what you would have done.

## Task 2 - complete the caching fetch library

You will find the caching fetch library contained completely within `/caching-fetch-library`.

The library is completely non-functional, but the surface API has already been defined, and utilized in the framework and application.

That file has more detailed instructions within the comments.

Here the most important thing is working code. We will read your code, but it's more important that when we run your code it works as detailed in the acceptance criteria. Do not worry too much about the quality of the code.

If you complete these tasks with time to spare, reflect on your implementation, and document any issues it, or issues the framework might have. Add these to the README.md as known issues or next steps.
