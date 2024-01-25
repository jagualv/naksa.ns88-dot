<?php 
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         echo "Invalid email format";
        exit;
    }
    echo "Thank you for your message, $name. We will respond to $email as soon as possible.";
    exit;
    } else {
    echo "Error: Invalid request.";
    }
?> 