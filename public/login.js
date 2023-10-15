const loginButton = document.getElementById('loginButton');
        const statusDiv = document.getElementById('status');

        loginButton.addEventListener('click', () => {
            // Redirect the user to the Todoist OAuth login page
            window.location.href = 'http://localhost:3000/auth/todoist';
        });

        // Check if the user is authenticated and display their data
        axios.get('/api/data')
            .then(response => {
                const data = response.data;
                statusDiv.innerHTML = `Logged in as: ${data.user.username}`;
            })
            .catch(error => {
                statusDiv.innerHTML = 'Not logged in.';
            });