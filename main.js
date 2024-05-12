async function book() {
    const place = document.getElementById('placeInput').value;
    const date = document.getElementById('dateInput').value;
    console.log(place, date)
    try {
        const response = await fetch('https://final-project-backend-0igk.onrender.com/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ place, date }),
        });

        if (response.ok) {
           // Show booking completed message
        document.getElementById('bookingMessage').style.display = 'block';
        // Optional: You can hide the form after successful booking
        document.getElementById('bookingForm').style.display = 'none';
        }

        else {
            const errorData = await response.json();
            alert('Error saving booking data:\n' + JSON.stringify(errorData));
            document.getElementById('bookingMessage').style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error.message);
        alert('Booking failed. Please try again later.');
    }
}
