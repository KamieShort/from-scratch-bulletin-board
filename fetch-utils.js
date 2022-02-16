const SUPABASE_URL = 'https://egdrvheseyhayxbahrri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZHJ2aGVzZXloYXl4YmFocnJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4ODE3MTMsImV4cCI6MTk2MDQ1NzcxM30.9epFpiRNgk8RIyWEaIJUu1on7JQXBpyH2ROvOPGlajE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function fetchPosts() {
    const resp = await client.from('bulletin-board').select('*');
    console.log(resp);
    return checkError(resp);
}

export async function signUpUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    console.log(resp);
}

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });
    console.log(resp);
}
