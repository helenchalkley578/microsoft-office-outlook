<style>
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f2f1;
}

.login-container {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

.logo {
    width: 80%; /* Adjust width as necessary */
    max-width: 300px;
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group input {
    width: 100%;
    padding: 14px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.input-group input:focus {
    border-color: #0078d7;
    box-shadow: 0 0 5px rgba(0, 120, 215, 0.3);
}

button {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 4px;
    background-color: #0078d7;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.options {
    margin-top: 20px;
}

.options a {
    color: #0078d7;
    text-decoration: none;
    font-size: 14px;
}

.options a:hover {
    text-decoration: underline;
}
</style>