# The Bulletin Plan

## General

Bulletin board will display post-it notes for authenticated user. fetchNotes
Allow sign and sign functions.
Must allow user to create posts.
Redirects when not authenticated.
Home link or button (button will have event listener, link will have a href.)

## Rubric

x Main branch deployed to Netlify 1
x Open PR from `dev` branch with Netlify deploy preview 1
Styled list of posts 3
Header with links (or buttons) to auth and create pages 1
ASYNC: `fetchPosts()` : return array of posts from supabase 2
Allows users to login or sign for the application 4
ASYNC: `signUpUser` - calls supabase signUp method and returns user 1
ASYNC: `signInUser` - calls supabase signIn method and returns user 1
Displays a form for users to add post details 1
Can only be loaded when logged in, otherwise redirects to the auth page 2
Header with links (or buttons) to home 1
Creates a new row in the database on form submit and redirects back to the home page 1
ASYNC: `createPost()` creates a new row in the database

## Order of Operations

create supabase data
-home page with post it; link supabase
-auth page will have login form and sign form; redirect
-add post page; submit form for create post; redirect if not authenticated; render function-TDD; form will include input for title, description, contact and button. add async function for create post in fetch-utils.
-login button changes state to log out when logged in.
